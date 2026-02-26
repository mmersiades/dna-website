import GroupCard from '@/components/local/GroupCard';
import { pageStyles } from '@/components/styles';
import { sanityFetch } from '@/sanity/lib/live';
import { GROUPS_QUERY } from '@/sanity/lib/queries';

export default async function LocalGroupList() {
  const { data: groups } = await sanityFetch({
    query: GROUPS_QUERY,
  });

  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>Local Groups</h4>
      <hr className={pageDivider} />
      <div className="grid gap-2 p-2 md:grid-cols-2">
        {groups.map((g, i) => (
          <GroupCard
            key={g._id}
            group={g}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
