import PageBuilder from '@/components/pageBuilder/PageBuilder';
import { pageStyles } from '@/components/styles';
import { getPage } from '@/lib/actions';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('about');

  return generateDNAMetadata(page);
}

export default async function AboutPage() {
  const page = await getPage('about');

  if (!page) return notFound();

  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>{page && <PageBuilder {...page} />}</div>
  );
}
