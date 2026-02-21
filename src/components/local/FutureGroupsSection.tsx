import GroupInterestTable from '@/components/local/GroupInterestTable';
import { pageStyles } from '@/components/styles';
import { FC } from 'react';

const FutureGroupsSection: FC = () => {
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;
  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>Future Groups</h4>
      <hr className={pageDivider} />
      <GroupInterestTable />
    </section>
  );
};

export default FutureGroupsSection;
