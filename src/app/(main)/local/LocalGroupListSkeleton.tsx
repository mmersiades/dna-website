import GroupCardSkeleton from '@/app/(main)/local/GroupCardSkeleton';
import { pageStyles } from '@/components/styles';
import { FC } from 'react';

const LocalGroupListSkeleton: FC = () => {
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>Local Groups</h4>
      <hr className={pageDivider} />
      <div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-2">
        <GroupCardSkeleton />
        <GroupCardSkeleton />
        <GroupCardSkeleton />
        <GroupCardSkeleton />
      </div>
    </section>
  );
};

export default LocalGroupListSkeleton;
