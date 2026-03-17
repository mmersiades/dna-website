import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { FC } from 'react';

const PastEventListSkeleton: FC = () => {
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;
  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{copy.events.previous}</h4>
      <hr className={pageDivider} />
    </section>
  );
};

export default PastEventListSkeleton;
