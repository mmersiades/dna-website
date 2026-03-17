import PastEventList from '@/app/(main)/events/PastEventList';
import PastEventListSkeleton from '@/app/(main)/events/PastEventsListSkeleton';
import humantixApi from '@/app/services/HumantixApi';
import dayjs from 'dayjs';
import { Suspense } from 'react';

export default async function PastEventsListViewModel() {
  const events = await humantixApi.fetchPastEvents({
    since: dayjs().subtract(1, 'year').toISOString(),
  });

  return (
    <Suspense fallback={<PastEventListSkeleton />}>
      <PastEventList events={events} />
    </Suspense>
  );
}
