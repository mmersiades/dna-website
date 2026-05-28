import ExternalResourceList from '@/app/(main)/learn/ExternalResourceList';
import { fetchSanityExternalResources } from '@/app/actions';
import copy from '@/constants/copy';

export default async function ExternalResourceViewModel() {
  const { degrowthTitle, usefulTitle, alliesTitle, membersTitle } = copy.learn;
  const extResources = await fetchSanityExternalResources();

  const degrowthLinks = extResources.filter(
    (resource) => resource.category === 'degrowth',
  );
  const alliesLinks = extResources.filter(
    (resource) => resource.category === 'allied',
  );
  const usefulLinks = extResources.filter(
    (resource) => resource.category === 'useful',
  );
  const memberLinks = extResources.filter(
    (resource) => resource.category === 'members',
  );

  return (
    <>
      <ExternalResourceList
        list={memberLinks}
        title={membersTitle}
      />
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
