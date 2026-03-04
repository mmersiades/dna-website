'use client';
import JoinOnlineGroupForm from '@/components/forms/JoinOnlineGroupForm';
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

  const { formContainer, formInnerContainer, formInnerInnerContainer } = {
    formContainer: cn(
      'absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100vw+10px)]',
      'min-h-(--header-height)',
      'bg-tertiary-800 dark:bg-tertiary-800',
      selectedGroup ? 'opacity-100 visible' : 'opacity-0 hidden',
      'starting:opacity-0 starting:translate-y-4 starting:scale-y-500',
      'scale-y-100',
      'transition-all transition-discrete duration-250',
    ),
    formInnerContainer: cn('container ml-auto mr-auto'),
    formInnerInnerContainer: cn('mx-4 py-4', 'border-b border-tertiary-700'),
  };

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

  return (
    <>
      <div className={formContainer}>
        <div className={formInnerContainer}>
          <div className={formInnerInnerContainer}>
            {selectedGroup && (
              <JoinOnlineGroupForm selectedGroup={selectedGroup} />
            )}
          </div>
        </div>
      </div>
      <section className={cn(sectionContainer, 'mt-0 pt-8')}>
        <h4 className={pageTitle}>{title}</h4>
        <hr className={pageDivider} />
        <div className="grid gap-2 p-2 md:grid-cols-2">
          {groups.map((g, i) => (
            <OnlineGroupCard
              key={g._id}
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
