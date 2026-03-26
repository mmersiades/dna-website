import FutureGroupsSectionSkeleton from '@/app/(main)/local/FutureGroupsSectionSkeleton';
import FutureGroupsSectionViewModel from '@/app/(main)/local/FutureGroupsSectionViewModel';
import LocalGroupListSkeleton from '@/app/(main)/local/LocalGroupListSkeleton';
import LocalGroupsListViewModel from '@/app/(main)/local/LocalGroupsListViewModel';
import { pageStyles } from '@/components/styles';
import { getPage } from '@/lib/actions';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('local');

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
