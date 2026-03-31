import FutureGroupsSection from '@/app/(main)/local/FutureGroupsSection';
import { fetchGroupIntentTableRows } from '@/app/actions';

export default async function FutureGroupsSectionViewModel() {
  const tableData = await fetchGroupIntentTableRows({
    state: null,
    country: null,
    region: null,
  });

  return <FutureGroupsSection initialTableData={tableData} />;
}
