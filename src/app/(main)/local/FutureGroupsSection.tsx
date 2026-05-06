import GroupInterestTable from '@/app/(main)/local/GroupInterestTable';
import { TableRow } from '@/app/services/SheetsApi';
import { pageStyles } from '@/components/styles';
import { FC } from 'react';

export interface FutureGroupsSectionProps {
  initialTableData: TableRow[];
}

const FutureGroupsSection: FC<FutureGroupsSectionProps> = ({
  initialTableData,
}) => {
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
