import { pageStyles } from '@/components/styles';
import { FC } from 'react';

const ExternalResourceListSkeleton: FC = () => {
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>Useful Degrowth Resources</h4>
      <hr className={pageDivider} />
    </section>
  );
};

export default ExternalResourceListSkeleton;
