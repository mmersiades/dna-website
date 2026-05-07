import { PAGE_QUERYResult } from '@/sanity/types';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import TestFixtures from '@/utils/TestFixtures';
import { describe, expect, test } from 'vitest';

describe('generateDNAMetadata', () => {
  describe('when page is undefined', () => {
    test('it should return empty object', () => {
      const result = generateDNAMetadata(undefined);
      expect(result).toEqual({});
    });
  });

  describe('without SEO image', () => {
    test('it should return base metadata', () => {
      const page = TestFixtures.pageResultEvents;
      const result = generateDNAMetadata(page);
      expect(result['title']).toEqual(page?.seo.title);
      expect(result['description']).toEqual(page?.seo.description);
    });
  });

  describe('with SEO image', () => {
    test('it should return base metadata', () => {
      const expected = {
        images: {
          url: 'https://cdn.sanity.io/images/cq86wj0q/production/cbc493fb760d900216db64576a17a20ce9a26dd1-1200x630.png?w=1200&h=630',
          width: 1200,
          height: 630,
        },
      };
      const page: PAGE_QUERYResult = {
        ...TestFixtures.pageResultEvents,
        seo: {
          ...TestFixtures.pageResultEvents.seo,
          image: TestFixtures.pageResultsSeoImage,
        },
      };
      const result = generateDNAMetadata(page);
      expect(result['title']).toEqual(page?.seo.title);
      expect(result['description']).toEqual(page?.seo.description);
      expect(result['openGraph']).toEqual(expected);
    });
  });

  describe('without robot indexing disabled', () => {
    test('it should return metadata with "noindex" ', () => {
      const page: PAGE_QUERYResult = {
        ...TestFixtures.pageResultEvents,
        seo: { ...TestFixtures.pageResultEvents.seo, noIndex: true },
      };
      const result = generateDNAMetadata(page);
      expect(result['title']).toEqual(page?.seo.title);
      expect(result['description']).toEqual(page?.seo.description);
      expect(result['robots']).toEqual('noindex');
    });
  });
});
