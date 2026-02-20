import GroupIntentForm from '@/components/forms/GroupIntentForm';
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
      <h6 className={'text-lg'}>Can&#39;t see a group in your area?</h6>
      <p className={'text-md'}>
        Let us know where you are and we&#39;ll help a group get established in
        your area.
      </p>
      <GroupIntentForm />
    </div>
  );
}
