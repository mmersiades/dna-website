import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { FC } from 'react';

const OnlineGroupsListSkeleton: FC = () => {
  const { title } = copy.online;
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{title}</h4>
      <hr className={pageDivider} />
    </section>
  );
};

export default OnlineGroupsListSkeleton;
