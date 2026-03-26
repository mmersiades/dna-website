import NationalGroupsListSkeleton from '@/app/(main)/online/NationalGroupsListSkeleton';
import NationalGroupsListViewModel from '@/app/(main)/online/NationalGroupsListViewModel';
import { pageStyles } from '@/components/styles';
import { getPage } from '@/lib/actions';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('online');

  return generateDNAMetadata(page);
}

export default async function NationalGroupsPage() {
  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>
      <Suspense fallback={<NationalGroupsListSkeleton />}>
        <NationalGroupsListViewModel />
      </Suspense>
    </div>
  );
}
