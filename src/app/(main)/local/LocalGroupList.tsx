import GroupCard from '@/app/(main)/local/GroupCard';
import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { sanityFetch } from '@/sanity/lib/live';
import { GROUPS_QUERY } from '@/sanity/lib/queries';

export default async function LocalGroupList() {
  const { title } = copy.local;
  const { data: groups } = await sanityFetch({
    query: GROUPS_QUERY,
  });

  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{title}</h4>
      <hr className={pageDivider} />
      <div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-2">
        {groups.map((g, i) => (
          <div
            key={g._id}
            className={'col-span-1'}
          >
            <GroupCard
              group={g}
              index={i}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
