import { pageStyles } from '@/components/styles';
import { FC } from 'react';

const FutureGroupsSectionSkeleton: FC = () => {
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;
  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>Future Groups</h4>
      <hr className={pageDivider} />
    </section>
  );
};

export default FutureGroupsSectionSkeleton;
