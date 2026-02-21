import { TableRow } from '@/app/services/SheetsApi';
import GroupInterestTable from '@/components/local/GroupInterestTable';
import { pageStyles } from '@/components/styles';
import { FC } from 'react';

interface Props {
  initialTableData: TableRow[];
}

const FutureGroupsSection: FC<Props> = ({ initialTableData }) => {
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;
  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>Future Groups</h4>
      <hr className={pageDivider} />
      <GroupInterestTable initialTableData={initialTableData} />
    </section>
  );
};

export default FutureGroupsSection;
