import OnlineGroupCard from '@/components/online/OnlineGroupCard';
import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { ONLINE_GROUPS_QUERYResult } from '@/sanity/types';
import { FC } from 'react';

interface Props {
  groups: ONLINE_GROUPS_QUERYResult[0][];
}

const OnlineGroupsList: FC<Props> = ({ groups }) => {
  const { title } = copy.online;
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{title}</h4>
      <hr className={pageDivider} />
      <div className="grid gap-2 p-2 md:grid-cols-2">
        {groups.map((g, i) => (
          <OnlineGroupCard
            key={g._id}
            group={g}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default OnlineGroupsList;
