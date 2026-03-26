import NationalGroupCardSkeleton from '@/app/(main)/online/NationalGroupCardSkeleton';
import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { FC } from 'react';

const NationalGroupsListSkeleton: FC = () => {
  const { title } = copy.national;
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{title}</h4>
      <hr className={pageDivider} />
      <div className="grid gap-2 p-2 md:grid-cols-2">
        <NationalGroupCardSkeleton />
        <NationalGroupCardSkeleton />
        <NationalGroupCardSkeleton />
        <NationalGroupCardSkeleton />
      </div>
    </section>
  );
};

export default NationalGroupsListSkeleton;
