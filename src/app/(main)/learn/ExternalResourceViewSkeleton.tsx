import ExternalResourceListSkeleton from '@/app/(main)/learn/ExternalResourceListSkeleton';
import copy from '@/constants/copy';
import { FC } from 'react';

const ExternalResourceViewSkeleton: FC = () => {
  const { degrowthTitle, usefulTitle, alliesTitle } = copy.learn;

  return (
    <>
      <ExternalResourceListSkeleton title={degrowthTitle} />
      <ExternalResourceListSkeleton title={alliesTitle} />
      <ExternalResourceListSkeleton title={usefulTitle} />
    </>
  );
};

export default ExternalResourceViewSkeleton;
