import {
  HumantixEvent,
  HumantixEventDate,
  HumantixEventDates,
  HumantixEventLocation,
} from '@/app/services/HumantixApi';
import styles from '@/components/humantixEvents/styles';
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
  const { container } = { container: '' };
  return (
    <div className={container}>
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
  if (loc.type === 'address') {
    return <p>{`${loc.venueName}, ${loc.city}, ${loc.region}`}</p>;
  } else {
    return <p>TODO</p>;
  }
};

const EventCard: FC<{ event: HumantixEvent }> = ({ event }) => {
  const { container } = {
    container: cn([
      'h-full w-full',
      'col-span-12 md:col-span-6 lg:col-span-4',
      '',
      //...
    ]),
  };
  return (
    <Link
      href={event.url}
      target={'_blank'}
      className={container}
    >
      {event.bannerImage && (
        <div className={'relative aspect-video w-full'}>
          <Image
            src={event.bannerImage.url}
            alt={event.name}
            fill
          />
        </div>
      )}
      {event.name}
      {event.sharingDescription && <p>{event.sharingDescription}</p>}
      <EventDates dates={event.dates} />
      <EventLocation loc={event.eventLocation} />
    </Link>
  );
};

interface Props {
  events: HumantixEvent[];
}

const FutureEventsList: FC<Props> = ({ events }) => {
  const { title, divider, listContainer } = styles;

  const { grid } = {
    grid: cn([
      'grid grid-cols-12 gap-4 md:gap-8',
      '',
      '',
      '',
      '',
      //...
    ]),
  };
  return (
    <div className={listContainer}>
      <h4 className={title}>Upcoming Events</h4>
      <hr className={divider} />
      <div className={grid}>
        {events.map((e) => (
          <EventCard
            key={e._id}
            event={e}
          />
        ))}
      </div>
    </div>
  );
};

export default FutureEventsList;
