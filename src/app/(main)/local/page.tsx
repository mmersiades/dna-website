import FutureGroupsSection from '@/components/local/FutureGroupsSection';
import LocalGroupList from '@/components/local/LocalGroupList';
import { pageStyles } from '@/components/styles';
import { sanityFetch } from '@/sanity/lib/live';
import { GROUPS_QUERY } from '@/sanity/lib/queries';

export default async function LocalGroupsPage() {
  const { data: groups } = await sanityFetch({
    query: GROUPS_QUERY,
  });

  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>
      <LocalGroupList groups={groups} />
      <FutureGroupsSection />
    </div>
  );
}
