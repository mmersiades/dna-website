import { cardStyles } from '@/components/styles';
import copy from '@/constants/copy';
import cn from '@/utils/cn';
import { FC } from 'react';

export const EventDatesSkeleton: FC = () => {
  const { cardSubHeading } = cardStyles;

  return (
    <div className={'flex flex-col'}>
      <p className={cn(cardSubHeading, 'text-muted')}>
        {copy.events.card.date}
      </p>
      <div className={'bg-muted h-20 w-1/2'}></div>
    </div>
  );
};

export const EventLocationSkeleton: FC = () => {
  const { cardSubHeading } = cardStyles;

  return (
    <div className={'flex flex-col'}>
      <p className={cn(cardSubHeading, 'text-muted')}>
        {copy.events.card.location}
      </p>
      <div className={'bg-muted h-10 w-full'}></div>
    </div>
  );
};

export const EventDescriptionSkeleton: FC = () => {
  return <div className={'bg-muted h-20 w-full'}></div>;
};

const EventCardSkeleton: FC = () => {
  const { container, content } = {
    container: cn(
      'h-full w-full',
      'col-span-12 lg:col-span-6 xl:col-span-4',
      'bg-muted/25',
      'border border-muted rounded-md',
    ),
    content: 'p-4',
  };

  const { cardHeading } = cardStyles;

  return (
    <div className={cn(container, 'group')}>
      <div>
        <div
          className={'bg-muted/50 relative aspect-2/1 w-full rounded-t-md'}
        ></div>
        <h4 className={cn(cardHeading, 'text-muted pt-2')}>Event</h4>
      </div>
      <div className={content}>
        <EventDescriptionSkeleton />
        <EventDatesSkeleton />
        <EventLocationSkeleton />
      </div>
    </div>
  );
};

export default EventCardSkeleton;
