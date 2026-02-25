import ExternalResourceCard from '@/components/learn/ExternalResourceCard';
import { pageStyles } from '@/components/styles';
import { sanityFetch } from '@/sanity/lib/live';
import { EXT_RESOURCES_QUERY } from '@/sanity/lib/queries';

export default async function ExternalResourceList() {
  const { data: extResources } = await sanityFetch({
    query: EXT_RESOURCES_QUERY,
  });

  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  const { grid, cell } = {
    grid: 'grid grid-cols-12 gap-2 lg:gap-4',
    cell: 'col-span-12 lg:col-span-6',
  };

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>Useful Degrowth Resources</h4>
      <hr className={pageDivider} />
      <div className={grid}>
        {extResources.map((er) => {
          return (
            <div
              key={er._id}
              className={cell}
            >
              <ExternalResourceCard resource={er} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
