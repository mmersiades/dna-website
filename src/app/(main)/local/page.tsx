import FutureGroupsSectionSkeleton from '@/components/local/FutureGroupsSectionSkeleton';
import FutureGroupsSectionViewModel from '@/components/local/FutureGroupsSectionViewModel';
import LocalGroupList from '@/components/local/LocalGroupList';
import LocalGroupListSkeleton from '@/components/local/LocalGroupListSkeleton';
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
        <LocalGroupList />
      </Suspense>
      <Suspense fallback={<FutureGroupsSectionSkeleton />}>
        <FutureGroupsSectionViewModel />
      </Suspense>
    </div>
  );
}
