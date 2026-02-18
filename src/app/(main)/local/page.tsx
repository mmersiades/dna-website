import GroupIntentForm from '@/components/forms/GroupIntentForm';
import GroupCard from '@/components/local/GroupCard';
import { sanityFetch } from '@/sanity/lib/live';
import { GROUPS_QUERY } from '@/sanity/lib/queries';

export default async function LocalGroupsPage() {
  const { data: groups } = await sanityFetch({
    query: GROUPS_QUERY,
  });

  return (
    <div className={'container mr-auto ml-auto'}>
      <p className={'text-center font-bold'}>Local Groups</p>
      <div className="flex flex-col gap-2">
        {groups.map((g) => (
          <GroupCard
            key={g._id}
            group={g}
          />
        ))}
      </div>
      <h6 className={'text-lg'}>Can&#39;t see a group in your area?</h6>
      <p className={'text-md'}>
        Let us know where you are and we&#39;ll help a group get established in
        your area.
      </p>
      <GroupIntentForm />
    </div>
  );
}
