import { urlFor } from '@/sanity/lib/image';
import { BlockContent } from '@/sanity/types';
import cn from '@/utils/cn';
import { PortableText, PortableTextComponents } from 'next-sanity';
import Image from 'next/image';
import { FC } from 'react';

const PageRichText: FC<{ value: BlockContent }> = ({ value }) => {
  const { prose } = {
    prose: cn([
      'my-8 mr-auto ml-auto',
      'prose',
      'md:prose-lg lg:prose-xl xl:prose-2xl',
      'dark:prose-invert',
      'prose-headings:font-display',
      'prose-a:font-bold ',
      'prose-a:text-secondary-400 prose-a:decoration-transparent',
      'prose-a:dark:text-secondary',
      'prose-a:hover:text-secondary prose-a:hover:decoration-secondary',
      'prose-a:hover:dark:text-secondary-200 prose-a:hover:dark:decoration-secondary-200',
      'prose-a:transition-[color,text-decoration-color] prose-a:duration-250',
      'prose-a:visited:text-secondary-600 prose-a:visited:dark:text-secondary-500',
    ]),
  };

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
              sizes={'(max-width: 768px) 100vw, 33vw'}
            />
          </div>
        );
      },
    },
  };

  return (
    <div className={prose}>
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
