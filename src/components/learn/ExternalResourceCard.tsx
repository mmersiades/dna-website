'use client';
import { EXT_RESOURCES_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  resource: EXT_RESOURCES_QUERYResult[0];
}

const ExternalResourceCard: FC<Props> = ({ resource }) => {
  const { container, content, h4, imageContainer, image } = {
    container: cn(
      'h-fit w-full',
      'flex flex-row',
      'bg-card/50',
      'border border-border rounded-md',
      'hover:border-secondary',
      'transition-color duration-250',
    ),
    content: 'p-4',
    h4: 'font-display text-lg font-bold',
    imageContainer: 'relative aspect-video w-full min-w-1/3',
    image: 'rounded-l-md object-cover',
  };

  return (
    <Link
      href={resource.url}
      target={'_blank'}
      className={container}
    >
      {resource.image && (
        <div className={imageContainer}>
          <Image
            src={resource.image}
            alt={`Image from ${resource.title} website`}
            fill
            className={image}
            loader={({ src, width, quality }) =>
              `${src}?w=${width}&q=${quality || 75}`
            }
          />
        </div>
      )}
      <div className={content}>
        <h4 className={h4}>{resource.title}</h4>
        <p>{resource.description}</p>
      </div>
    </Link>
  );
};

export default ExternalResourceCard;
