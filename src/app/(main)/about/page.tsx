import { fetchSanityPage } from '@/app/actions';
import PageBuilderViewModel from '@/components/pageBuilder/PageBuilderViewModel';
import { pageStyles } from '@/components/styles';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchSanityPage('about');

  return generateDNAMetadata(page);
}

export default async function AboutPage() {
  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>
      <Suspense fallback={<div>TODO: Loading...</div>}>
        <PageBuilderViewModel
          page={'about'}
          fallbackTitle={'About Degrowth Network Australia'}
        />
      </Suspense>
    </div>
  );
}
