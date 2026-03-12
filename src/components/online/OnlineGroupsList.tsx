'use client';
import DesktopJoinForm from '@/components/online/DesktopJoinForm';
import MobileJoinForm from '@/components/online/MobileJoinForm';
import OnlineGroupCard from '@/components/online/OnlineGroupCard';
import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { ONLINE_GROUPS_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import { FC, useState } from 'react';

interface Props {
  groups: ONLINE_GROUPS_QUERYResult[0][];
}

const OnlineGroupsList: FC<Props> = ({ groups }) => {
  const [selectedGroup, setSelectedGroup] = useState<
    ONLINE_GROUPS_QUERYResult[0] | null
  >(null);
  const { title } = copy.online;

  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  const onSelectGroup = (group: ONLINE_GROUPS_QUERYResult[0]) => {
    setSelectedGroup((prev) => {
      if (prev === null) {
        return group;
      }
      if (prev._id === group._id) {
        return null;
      }
      return group;
    });
  };

  const clearSelectedGroup = () => {
    setSelectedGroup(null);
  };

  const { desktopForm } = {
    desktopForm: 'hidden md:block',
  };

  return (
    <>
      <div className={desktopForm}>
        <DesktopJoinForm
          selectedGroup={selectedGroup}
          onSubmit={clearSelectedGroup}
        />
      </div>
      <MobileJoinForm
        selectedGroup={selectedGroup}
        onClose={clearSelectedGroup}
        onSubmit={clearSelectedGroup}
      />
      <section className={cn(sectionContainer, 'mt-0 pt-8')}>
        <h4 className={pageTitle}>{title}</h4>
        <hr className={pageDivider} />
        <div className="grid gap-2 p-2 md:grid-cols-2">
          {groups.map((g, i) => (
            <OnlineGroupCard
              key={g._id + i}
              group={g}
              index={i}
              onSelectGroup={onSelectGroup}
              selected={selectedGroup?._id === g._id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default OnlineGroupsList;
