import sheetsApi from '@/app/services/SheetsApi';
import FutureGroupsSection from '@/components/local/FutureGroupsSection';
import { env } from '@/env';

export default async function FutureGroupsSectionViewModel() {
  await sheetsApi.getSheetData(
    env.GOOGLE_SHEETS_GROUP_INTENT_SHEET_ID,
    'Sheet1',
  );

  const tableData = sheetsApi.getTableRows({
    state: null,
    country: null,
    region: null,
  });

  return <FutureGroupsSection initialTableData={tableData} />;
}
