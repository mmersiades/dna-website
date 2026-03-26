import LocalGroupList from '@/app/(main)/local/LocalGroupList';
import { fetchSanityLocalGroups } from '@/app/actions';

export default async function LocalGroupsListViewModel() {
  const groups = await fetchSanityLocalGroups();

  return <LocalGroupList groups={groups} />;
}
