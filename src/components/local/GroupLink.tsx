import { GroupLink as Props } from '@/sanity/types';
import { FC } from 'react';

const GroupLink: FC<Props> = ({ label, url }) => {
  return <a href={url}>{label}</a>;
};

export default GroupLink;
