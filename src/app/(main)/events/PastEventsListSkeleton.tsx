import PastEventListItemSkeleton from '@/app/(main)/events/PastEventListItemSkeleton';
import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { FC } from 'react';

const PastEventListSkeleton: FC = () => {
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;
  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{copy.events.previous}</h4>
      <hr className={pageDivider} />
      <div className="flex flex-col gap-2 p-2">
        <PastEventListItemSkeleton />
        <PastEventListItemSkeleton />
        <PastEventListItemSkeleton />
      </div>
    </section>
  );
};

export default PastEventListSkeleton;
