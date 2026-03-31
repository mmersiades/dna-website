import { cardStyles } from '@/components/styles';
import { GroupActivity as GroupActivityProps } from '@/sanity/types';
import { FC } from 'react';
import GroupActivity from './GroupActivity';

interface Props {
  activities: ({ _key: string } & GroupActivityProps)[] | null;
}

const GroupActivityDisplay: FC<Props> = ({ activities }) => {
  if (!activities) return null;
  if (activities.length === 0) return null;

  const { cardSubHeading, cardListContainer } = cardStyles;

  return (
    <>
      <h6 className={cardSubHeading}>Activities</h6>
      <div className={cardListContainer}>
        {activities.map((a) => (
          <GroupActivity
            key={a._key}
            {...a}
          />
        ))}
      </div>
    </>
  );
};

export default GroupActivityDisplay;
