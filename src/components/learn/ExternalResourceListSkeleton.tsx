import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { FC } from 'react';

const ExternalResourceListSkeleton: FC = () => {
  const { title: learnTitle } = copy.learn;
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{learnTitle}</h4>
      <hr className={pageDivider} />
    </section>
  );
};

export default ExternalResourceListSkeleton;
