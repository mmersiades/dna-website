import PageBuilder from '@/components/pageBuilder/PageBuilder';
import { sanityFetch } from '@/sanity/lib/live';
import { PAGE_QUERY } from '@/sanity/lib/queries';

export default async function AboutPage() {
  const { data: page } = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug: 'about' },
  });

  return (
    <div className={'container mr-auto ml-auto'}>
      {page && <PageBuilder {...page} />}
    </div>
  );
}
