import {
  EventDates,
  EventDescription,
  EventLocation,
} from '@/app/(main)/events/EventCard';
import { HumantixEvent } from '@/app/services/HumantixApi';
import { cardStyles } from '@/components/styles';
import cn from '@/utils/cn';
import { FC } from 'react';

interface Props {
  event: HumantixEvent;
}

const PastEventListItem: FC<Props> = ({ event }) => {
  const { cardSubHeading } = cardStyles;
  const { container } = {
    container: cn(
      'flex flex-col sm:flex-row gap-4',
      'p-4',
      'bg-muted/50',
      'rounded-lg',
      'border border-muted',
    ),
  };

  return (
    <div className={container}>
      <div className={'flex-3'}>
        <h4 className={cardSubHeading}>{event.name}</h4>
        <EventDescription
          description={event.description}
          sharingDescription={event.sharingDescription}
        />
      </div>
      <div className={'flex-1'}>
        <EventDates dates={event.dates} />
      </div>
      <div className={'flex-1'}>
        <EventLocation loc={event.eventLocation} />
      </div>
    </div>
  );
};

export default PastEventListItem;
