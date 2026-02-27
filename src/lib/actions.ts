import { sanityFetch } from '@/sanity/lib/live';
import { PAGE_QUERY } from '@/sanity/lib/queries';
import { PAGE_QUERYResult } from '@/sanity/types';
import { cache } from 'react';

export const getPage = cache(
  async (slug: string): Promise<PAGE_QUERYResult> => {
    const { data } = await sanityFetch({
      query: PAGE_QUERY,
      params: { slug },
    });
    return data;
  },
);
