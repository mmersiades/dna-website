import FutureGroupsSectionSkeleton from '@/app/(main)/local/FutureGroupsSectionSkeleton';
import FutureGroupsSectionViewModel from '@/app/(main)/local/FutureGroupsSectionViewModel';
import LocalGroupListSkeleton from '@/app/(main)/local/LocalGroupListSkeleton';
import LocalGroupsListViewModel from '@/app/(main)/local/LocalGroupsListViewModel';
import { fetchSanityPage } from '@/app/actions';
import { pageStyles } from '@/components/styles';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchSanityPage('local');

  return generateDNAMetadata(page);
}

export default async function LocalGroupsPage() {
  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>
      <Suspense fallback={<LocalGroupListSkeleton />}>
        <LocalGroupsListViewModel />
      </Suspense>
      <Suspense fallback={<FutureGroupsSectionSkeleton />}>
        <FutureGroupsSectionViewModel />
      </Suspense>
    </div>
  );
}
