import ExternalResourceList from '@/components/learn/ExternalResourceList';
import ExternalResourceListSkeleton from '@/components/learn/ExternalResourceListSkeleton';
import { pageStyles } from '@/components/styles';
import { Suspense } from 'react';

export default async function LearningPage() {
  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>
      <Suspense fallback={<ExternalResourceListSkeleton />}>
        <ExternalResourceList />
      </Suspense>
    </div>
  );
}
