import { sanityFetch } from '@/sanity/lib/live';
import { GROUPS_QUERY } from '@/sanity/lib/queries';

export default async function LocalGroupsPage() {
  const { data: groups } = await sanityFetch({
    query: GROUPS_QUERY,
  });
  return (
    <div className={'container mr-auto ml-auto'}>
      <p className={'text-center font-bold'}>Local Groups</p>
      <div className="flex flex-col gap-2">
        {groups.map((g) => {
          return (
            <div
              key={g._id}
              className={
                'rounded-md border border-gray-300 bg-gray-200 p-2 dark:border-gray-600 dark:bg-gray-700'
              }
            >
              <h6>{g.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
