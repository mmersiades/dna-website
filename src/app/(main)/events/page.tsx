import FutureEventsList from '@/app/(main)/events/FutureEventsList';
import PastEventsListViewModel from '@/app/(main)/events/PastEventsListViewModel';
import humantixApi from '@/app/services/HumantixApi';
import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { getPage } from '@/lib/actions';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('events');

  return generateDNAMetadata(page);
}

export default async function EventsPage() {
  const { events, status } = await humantixApi.fetchFutureEvents();

  const { pageContainer } = pageStyles;

  if (status !== 200) {
    return (
      <div className={pageContainer}>
        <p className={'text-center font-bold'}>{copy.events.error}</p>
      </div>
    );
  }

  const sorted = events
    .filter((event) => event.published && event.public)
    .sort(
      (a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime(),
    );

  return (
    <div className={pageContainer}>
      <FutureEventsList events={sorted} />
      <PastEventsListViewModel />
    </div>
  );
}
