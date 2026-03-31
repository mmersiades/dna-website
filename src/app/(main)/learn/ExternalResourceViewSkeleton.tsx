import ExternalResourceListSkeleton from '@/app/(main)/learn/ExternalResourceListSkeleton';
import copy from '@/constants/copy';

export default async function ExternalResourceViewSkeleton() {
  const { degrowthTitle, usefulTitle, alliesTitle } = copy.learn;

  return (
    <>
      <ExternalResourceListSkeleton title={degrowthTitle} />
      <ExternalResourceListSkeleton title={alliesTitle} />
      <ExternalResourceListSkeleton title={usefulTitle} />
    </>
  );
}
