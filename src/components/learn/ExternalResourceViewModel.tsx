import ExternalResourceList from '@/components/learn/ExternalResourceList';
import copy from '@/constants/copy';
import { sanityFetch } from '@/sanity/lib/live';
import { EXT_RESOURCES_QUERY } from '@/sanity/lib/queries';

export default async function ExternalResourceViewModel() {
  const { degrowthTitle, usefulTitle, alliesTitle } = copy.learn;
  const { data: extResources } = await sanityFetch({
    query: EXT_RESOURCES_QUERY,
    stega: false,
  });

  const degrowthLinks = extResources.filter(
    (resource) => resource.category === 'degrowth',
  );
  const alliesLinks = extResources.filter(
    (resource) => resource.category === 'allied',
  );
  const usefulLinks = extResources.filter(
    (resource) => resource.category === 'useful',
  );

  return (
    <>
      <ExternalResourceList
        list={degrowthLinks}
        title={degrowthTitle}
      />
      <ExternalResourceList
        list={alliesLinks}
        title={alliesTitle}
      />
      <ExternalResourceList
        list={usefulLinks}
        title={usefulTitle}
      />
    </>
  );
}
