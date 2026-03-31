import FutureEventsList from '@/app/(main)/events/FutureEventsList';
import FutureEventsListSkeleton from '@/app/(main)/events/FutureEventsListSkeleton';
import { fetchHumantixFutureEvents } from '@/app/actions';
import { Suspense } from 'react';

export default async function FutureEventsListViewModel() {
  const events = await fetchHumantixFutureEvents();

  return (
    <Suspense fallback={<FutureEventsListSkeleton />}>
      <FutureEventsList events={events} />
    </Suspense>
  );
}
