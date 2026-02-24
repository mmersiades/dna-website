import {
  HumantixEvent,
  HumantixEventDate,
  HumantixEventDates,
  HumantixEventLocation,
} from '@/app/services/HumantixApi';
import { cardStyles } from '@/components/styles';
import cn from '@/utils/cn';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const EventDate: FC<{ date: HumantixEventDate }> = ({ date }) => {
  const readableDate = dayjs(date.startDate).format('MMMM D, YYYY');
  const start = dayjs(date.startDate).format('HH:mm');
  const end = dayjs(date.endDate).format('HH:mm');

  return (
    <>
      <p>{readableDate}</p>
      <p>{`${start} - ${end}`}</p>
    </>
  );
};

const EventDates: FC<{ dates: HumantixEventDates }> = ({ dates }) => {
  const { cardSubHeading } = cardStyles;

  return (
    <div>
      <h6 className={cardSubHeading}>Date</h6>
      {dates.map((date) => (
        <EventDate
          key={date._id}
          date={date}
        />
      ))}
    </div>
  );
};

const EventLocation: FC<{ loc: HumantixEventLocation }> = ({ loc }) => {
  const { cardSubHeading } = cardStyles;

  if (loc.type === 'address') {
    return (
      <>
        <h6 className={cardSubHeading}>Location</h6>
        <p>{`${loc.venueName}, ${loc.city}, ${loc.region}`}</p>
      </>
    );
  } else {
    return <p>TODO</p>;
  }
};

interface Props {
  event: HumantixEvent;
}

const EventCard: FC<Props> = ({ event }) => {
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
      href={event.url}
      target={'_blank'}
      className={container}
    >
      <div>
        {event.bannerImage && (
          <div className={'relative aspect-video w-full'}>
            <Image
              src={event.bannerImage.url}
              alt={event.name}
              fill
              className={'rounded-t-md'}
            />
          </div>
        )}
        <h4 className={cn(cardHeading, 'pt-2')}>{event.name}</h4>
      </div>
      <div className={content}>
        {event.sharingDescription && <p>{event.sharingDescription}</p>}
        <EventDates dates={event.dates} />
        <EventLocation loc={event.eventLocation} />
      </div>
    </Link>
  );
};

export default EventCard;
