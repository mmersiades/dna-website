import NationalGroupsList from '@/app/(main)/national/NationalGroupsList';
import { fetchSanityNationalGroups } from '@/app/actions';

export default async function NationalGroupsListViewModel() {
  const nationalGroups = await fetchSanityNationalGroups();

  return <NationalGroupsList groups={nationalGroups} />;
}
