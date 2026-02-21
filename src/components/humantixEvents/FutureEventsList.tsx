import { HumantixEvent } from '@/app/services/HumantixApi';
import EventCard from '@/components/humantixEvents/EventCard';
import { pageStyles } from '@/components/styles';
import cn from '@/utils/cn';
import { FC } from 'react';

interface Props {
  events: HumantixEvent[];
}

const FutureEventsList: FC<Props> = ({ events }) => {
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  const { grid } = {
    grid: cn('grid grid-cols-12 gap-4 md:gap-8 p-2'),
  };

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>Upcoming Events</h4>
      <hr className={pageDivider} />
      <div className={grid}>
        {events.map((e) => (
          <EventCard
            key={e._id}
            event={e}
          />
        ))}
      </div>
    </section>
  );
};

export default FutureEventsList;
