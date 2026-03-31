import NationalGroupsListSkeleton from '@/app/(main)/national/NationalGroupsListSkeleton';
import NationalGroupsListViewModel from '@/app/(main)/national/NationalGroupsListViewModel';
import { pageStyles } from '@/components/styles';
import { getPage } from '@/lib/actions';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('national');

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
