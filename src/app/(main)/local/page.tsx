import FutureGroupsSectionSkeleton from '@/components/local/FutureGroupsSectionSkeleton';
import FutureGroupsSectionViewModel from '@/components/local/FutureGroupsSectionViewModel';
import LocalGroupList from '@/components/local/LocalGroupList';
import LocalGroupListSkeleton from '@/components/local/LocalGroupListSkeleton';
import { pageStyles } from '@/components/styles';
import { Suspense } from 'react';

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
