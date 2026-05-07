import ExternalResourceViewModel from '@/app/(main)/learn/ExternalResourceViewModel';
import ExternalResourceViewSkeleton from '@/app/(main)/learn/ExternalResourceViewSkeleton';
import { fetchSanityPage } from '@/app/actions';
import { pageStyles } from '@/components/styles';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchSanityPage('learn');

  return generateDNAMetadata(page);
}

export default async function LearningPage() {
  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>
      <Suspense fallback={<ExternalResourceViewSkeleton />}>
        <ExternalResourceViewModel />
      </Suspense>
    </div>
  );
}
