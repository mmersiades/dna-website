import { sanityFetch } from '@/sanity/lib/live';
import { EXT_RESOURCES_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';

export default async function LearningPage() {
  const { data: extResources } = await sanityFetch({
    query: EXT_RESOURCES_QUERY,
  });
  return (
    <div>
      <p className={'text-center font-bold'}>Learn</p>
      <div className="flex flex-col gap-2">
        {extResources.map((er) => {
          if (!er.url || !er.name) return null;
          return (
            <Link
              href={er.url}
              key={er._id}
              target="_blank"
            >
              {er.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
