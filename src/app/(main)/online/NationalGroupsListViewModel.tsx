import NationalGroupsList from '@/app/(main)/online/NationalGroupsList';
import { fetchSanityNationalGroups } from '@/app/actions';

export default async function NationalGroupsListViewModel() {
  const nationalGroups = await fetchSanityNationalGroups();

  return <NationalGroupsList groups={nationalGroups} />;
}
