import { GroupActivity as Props } from '@/sanity/types';
import { FC } from 'react';

const GroupActivity: FC<Props> = ({ activityLabel, activityUrl }) => {
  return <a href={activityUrl}>{activityLabel}</a>;
};

export default GroupActivity;
