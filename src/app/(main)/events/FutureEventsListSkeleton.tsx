import EventCardSkeleton from '@/app/(main)/events/EventCardSkeleton';
import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import cn from '@/utils/cn';
import { FC } from 'react';

const FutureEventsListSkeleton: FC = () => {
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  const { grid } = {
    grid: cn('grid grid-cols-12 gap-4 md:gap-8 p-2'),
  };

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{copy.events.upcoming}</h4>
      <hr className={pageDivider} />
      <div className={grid}>
        <EventCardSkeleton />
        <EventCardSkeleton />
        <EventCardSkeleton />
      </div>
    </section>
  );
};

export default FutureEventsListSkeleton;
