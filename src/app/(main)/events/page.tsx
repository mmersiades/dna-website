import FutureEventsListViewModel from '@/app/(main)/events/FutureEventsListViewModel';
import PastEventsListViewModel from '@/app/(main)/events/PastEventsListViewModel';
import { pageStyles } from '@/components/styles';
import { getPage } from '@/lib/actions';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('events');

  return generateDNAMetadata(page);
}

export default async function EventsPage() {
  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>
      <FutureEventsListViewModel />
      <PastEventsListViewModel />
    </div>
  );
}
