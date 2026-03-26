import PastEventList from '@/app/(main)/events/PastEventList';
import PastEventListSkeleton from '@/app/(main)/events/PastEventsListSkeleton';
import { fetchHumantixPastEvents } from '@/app/actions';
import { Suspense } from 'react';

export default async function PastEventsListViewModel() {
  const events = await fetchHumantixPastEvents();

  return (
    <Suspense fallback={<PastEventListSkeleton />}>
      <PastEventList events={events} />
    </Suspense>
  );
}
