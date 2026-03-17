import {
  HumantixEvent,
  HumantixEventDate,
  HumantixEventDates,
  HumantixEventLocation,
} from '@/app/services/HumantixApi';
import { cardStyles } from '@/components/styles';
import copy from '@/constants/copy';
import cn from '@/utils/cn';
import generatePhotoSizes from '@/utils/generatePhotoSizes';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

dayjs.extend(utc);
dayjs.extend(timezone);

const getTzAbbreviation = (date: Date, timeZone: string) => {
  return new Intl.DateTimeFormat('en-AU', {
    timeZone,
    timeZoneName: 'short',
  })
    .formatToParts(date)
    .find((part) => part.type === 'timeZoneName')?.value;
};

const EventDate: FC<{ date: HumantixEventDate; timezone: string }> = ({
  date,
  timezone,
}) => {
  const startDate = new Date(date.startDate);

  const readableDate = dayjs(startDate)
    .tz(timezone)
    .format('ddd, MMMM D, YYYY');

  const start = dayjs(startDate).tz(timezone).format('HH:mm');
  const end = dayjs(date.endDate).tz(timezone).format('HH:mm');

  const tzAbbr = getTzAbbreviation(startDate, timezone);

  const time = `${start} - ${end} ${tzAbbr}`;

  return (
    <>
      <p>{readableDate}</p>
      <p>{time}</p>
    </>
  );
};

export const EventDates: FC<{
  dates: HumantixEventDates;
  timezone: string;
}> = ({ dates, timezone }) => {
  const { cardSubHeading } = cardStyles;

  return (
    <div className={'flex flex-col'}>
      <p className={cardSubHeading}>{copy.events.card.date}</p>
      {dates.map((date) => (
        <EventDate
          key={date._id}
          date={date}
          timezone={timezone}
        />
      ))}
    </div>
  );
};

export const EventLocation: FC<{ loc: HumantixEventLocation }> = ({ loc }) => {
  const { cardSubHeading } = cardStyles;
  let location = '';
  switch (loc.type) {
    case 'address':
      location = `${loc.venueName}, ${loc.city}, ${loc.region}`;
      break;
    case 'online':
      location = loc.instructions ?? 'Online';
      break;
    case 'custom':
      // TODO:
      location = 'Custom location';
      break;
    case 'toBeAnnounced':
      location = 'To be announced';
      break;
  }

  return (
    <div className={'flex flex-col'}>
      <p className={cardSubHeading}>{copy.events.card.location}</p>
      <p>{location}</p>
    </div>
  );
};

export const EventDescription: FC<{
  description?: string;
  sharingDescription?: string;
}> = ({ sharingDescription }) => {
  if (sharingDescription) {
    return <p>{sharingDescription}</p>;
  }

  // After creating parseHTML(), I decided not to try and include
  // description (an HTML string) because it's too long and the
  // possibility of bad HTML coming from the Humantix event creator

  return null;
};

interface Props {
  event: HumantixEvent;
  index: number; // 0-based
}

const EventCard: FC<Props> = ({ event, index }) => {
  const { container, content } = {
    container: cn(
      'h-full w-full',
      'col-span-12 lg:col-span-6 xl:col-span-4',
      'bg-card/50',
      'border border-border rounded-md',
      'hover:border-secondary',
      'transition-color duration-250',
    ),
    content: 'p-4',
  };

  const { cardHeading } = cardStyles;

  return (
    <Link
      href={event.url as Route}
      target={'_blank'}
      className={container}
    >
      <div>
        {event.bannerImage && (
          <div className={'relative aspect-2/1 w-full'}>
            <Image
              src={event.bannerImage.url}
              alt={event.name}
              fill
              className={'aspect-2/1 rounded-t-md'}
              sizes={generatePhotoSizes({
                mobile: 600,
                sm: 600,
                md: 475, // Smaller because two columns
                lg: 400, // Smaller because three columns
                xl: 400,
                xxl: 475,
              })}
              loading={index < 6 ? 'eager' : 'lazy'}
            />
          </div>
        )}
        <h4 className={cn(cardHeading, 'pt-2')}>{event.name}</h4>
      </div>
      <div className={content}>
        <EventDescription
          description={event.description}
          sharingDescription={event.sharingDescription}
        />
        <EventDates
          dates={event.dates}
          timezone={event.timezone}
        />
        <EventLocation loc={event.eventLocation} />
      </div>
    </Link>
  );
};

export default EventCard;
