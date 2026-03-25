import { fetchGroupIntentTableRows } from '@/app/actions';
import FutureGroupsSection from '@/components/local/FutureGroupsSection';

export default async function FutureGroupsSectionViewModel() {
  const tableData = await fetchGroupIntentTableRows({
    state: null,
    country: null,
    region: null,
  });

  return <FutureGroupsSection initialTableData={tableData} />;
}
