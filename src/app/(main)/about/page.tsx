import PageBuilder from '@/components/pageBuilder/PageBuilder';
import { getPage } from '@/lib/actions';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('about');

  return generateDNAMetadata(page);
}

export default async function AboutPage() {
  const page = await getPage('about');

  // TODO: redirect to not found page

  return (
    <div className={'container mr-auto ml-auto'}>
      {page && <PageBuilder {...page} />}
    </div>
  );
}
