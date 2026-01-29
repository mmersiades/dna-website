import { urlFor } from '@/sanity/lib/image';
import { BlockContent } from '@/sanity/types';
import { PortableText, PortableTextComponents } from 'next-sanity';
import Image from 'next/image';
import { FC } from 'react';

const PageRichText: FC<{ value: BlockContent }> = ({ value }) => {
  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => {
        return (
          <div className="relative my-8 h-96 w-full">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || 'Image'}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        );
      },
    },
  };

  return (
    <div className="prose">
      {
        <PortableText
          value={value}
          components={components}
        />
      }
    </div>
  );
};

export default PageRichText;
