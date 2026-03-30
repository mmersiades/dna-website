import GroupCard from '@/app/(main)/local/GroupCard';
import GridCardPlaceholder from '@/components/GridCardPlaceholder';
import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { GROUPS_QUERYResult } from '@/sanity/types';
import { FC } from 'react';

interface Props {
  groups: GROUPS_QUERYResult;
}

const LocalGroupList: FC<Props> = ({ groups }) => {
  const { title } = copy.local;

  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{title}</h4>
      <hr className={pageDivider} />
      <div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-2">
        {groups.map((g, i) => (
          <div
            key={g._id}
            className={'col-span-1'}
          >
            <GroupCard
              group={g}
              index={i}
            />
          </div>
        ))}
        {groups.length % 2 === 1 && (
          <GridCardPlaceholder
            type={'flower-bees'}
            altText={'Local group placeholder'}
          />
          // <div className="hidden items-center justify-center md:flex">
          //   <GroupCardPlaceholder />
          // </div>
        )}
      </div>
    </section>
  );
};

export default LocalGroupList;
