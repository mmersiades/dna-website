import ExternalResourceCardSkeleton from '@/app/(main)/learn/ExternalResourceCardSkeleton';
import { pageStyles } from '@/components/styles';
import { FC } from 'react';

interface Props {
  title: string;
}

const ExternalResourceListSkeleton: FC<Props> = ({ title }) => {
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  const { grid, cell } = {
    grid: 'grid grid-cols-12 gap-2 lg:gap-4',
    cell: 'col-span-12 lg:col-span-6',
  };

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{title}</h4>
      <hr className={pageDivider} />
      <div className={grid}>
        <div className={cell}>
          <ExternalResourceCardSkeleton />
        </div>
        <div className={cell}>
          <ExternalResourceCardSkeleton />
        </div>
        <div className={cell}>
          <ExternalResourceCardSkeleton />
        </div>
        <div className={cell}>
          <ExternalResourceCardSkeleton />
        </div>
      </div>
    </section>
  );
};

export default ExternalResourceListSkeleton;
