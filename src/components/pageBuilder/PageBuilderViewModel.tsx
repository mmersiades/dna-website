import { fetchSanityPage } from '@/app/actions';
import PageBuilder from '@/components/pageBuilder/PageBuilder';
import { notFound } from 'next/navigation';

export default async function PageBuilderViewModel({
  page,
  fallbackTitle,
}: {
  page: string;
  fallbackTitle: string;
}) {
  const data = await fetchSanityPage(page);

  if (!data) return notFound();

  return (
    <PageBuilder
      {...data}
      title={data.title ?? fallbackTitle}
    />
  );
}
