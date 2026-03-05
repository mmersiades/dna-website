import OnlineGroupsList from '@/components/online/OnlineGroupsList';
import { sanityFetch } from '@/sanity/lib/live';
import { ONLINE_GROUPS_QUERY } from '@/sanity/lib/queries';

export default async function OnlineGroupsListViewModel() {
  const { data: onlineGroups } = await sanityFetch({
    query: ONLINE_GROUPS_QUERY,
    stega: false,
  });

  const temp = [
    ...onlineGroups,
    ...onlineGroups,
    ...onlineGroups,
    ...onlineGroups,
    ...onlineGroups,
    ...onlineGroups,
  ];

  return <OnlineGroupsList groups={temp} />;
}
