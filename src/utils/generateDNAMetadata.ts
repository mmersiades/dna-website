import { urlFor } from '@/sanity/lib/image';
import { PAGE_QUERYResult } from '@/sanity/types';
import { Metadata } from 'next';

const generateDNAMetadata = (page?: PAGE_QUERYResult) => {
  if (!page) {
    return {};
  }

  const metadata: Metadata = {
    title: page.seo.title,
    description: page.seo.description,
  };

  if (page.seo.image) {
    metadata.openGraph = {
      images: {
        url: urlFor(page.seo.image).width(1200).height(630).url(),
        width: 1200,
        height: 630,
      },
    };
  }

  if (page.seo.noIndex) {
    metadata.robots = 'noindex';
  }

  return metadata;
};

export default generateDNAMetadata;
