import {
  EventDatesSkeleton,
  EventDescriptionSkeleton,
  EventLocationSkeleton,
} from '@/app/(main)/events/EventCardSkeleton';
import { cardStyles } from '@/components/styles';
import cn from '@/utils/cn';
import { FC } from 'react';

const PastEventListItemSkeleton: FC = () => {
  const { cardSubHeading } = cardStyles;
  const { container } = {
    container: cn(
      'flex flex-col sm:flex-row gap-4',
      'p-4',
      'bg-muted/25',
      'rounded-lg',
      'border border-muted',
    ),
  };

  return (
    <div className={container}>
      <div className={'flex-3'}>
        <h4 className={cn(cardSubHeading, 'text-muted')}>Event</h4>
        <EventDescriptionSkeleton />
      </div>

      <div className={'flex-1'}>
        <EventDatesSkeleton />
      </div>

      <div className={'flex-1'}>
        <EventLocationSkeleton />
      </div>
    </div>
  );
};

export default PastEventListItemSkeleton;
