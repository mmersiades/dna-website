import ExternalResourceCard from '@/app/(main)/learn/ExternalResourceCard';
import { pageStyles } from '@/components/styles';
import { EXT_RESOURCES_QUERYResult } from '@/sanity/types';
import { FC } from 'react';

interface Props {
  title: string;
  list: EXT_RESOURCES_QUERYResult[0][];
}

const ExternalResourceList: FC<Props> = ({ list, title }) => {
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
        {list.map((er, index) => (
          <div
            key={er._id}
            className={cell}
          >
            <ExternalResourceCard
              resource={er}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExternalResourceList;
