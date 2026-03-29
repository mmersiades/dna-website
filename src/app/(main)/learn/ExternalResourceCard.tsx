'use client';
import { EXT_RESOURCES_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import generatePhotoSizes from '@/utils/generatePhotoSizes';
import { Route } from 'next';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  resource: EXT_RESOURCES_QUERYResult[0];
  index: number; // 0-based
}

const ResourceImage: FC<Props> = ({ resource, index }) => {
  const { resolvedTheme } = useTheme();
  const { image, placeholder } = {
    image: 'rounded-l-md object-cover',
    placeholder: 'rounded-l-md p-4',
  };
  if (resource.image) {
    return (
      <Image
        src={resource.image}
        alt={`Image from ${resource.title} website`}
        fill
        className={image}
        loader={({ src, width, quality }) =>
          `${src}?w=${width}&q=${quality || 75}`
        }
        sizes={generatePhotoSizes({
          mobile: 225,
          sm: 225,
          md: 310,
          lg: 175, // Smaller because two columns
          xl: 225,
          xxl: 310,
        })}
        loading={index < 8 ? 'eager' : 'lazy'}
      />
    );
  } else {
    const src =
      resolvedTheme === 'dark'
        ? '/birdhouse-stippled-dark.svg'
        : '/birdhouse-stippled-light.svg';
    return (
      <Image
        src={src}
        alt={`Image placeholder for ${resource.title} website`}
        fill
        className={placeholder}
        sizes={generatePhotoSizes({
          mobile: 225,
          sm: 225,
          md: 310,
          lg: 175, // Smaller because two columns
          xl: 225,
          xxl: 310,
        })}
      />
    );
  }
};

const ExternalResourceCard: FC<Props> = ({ resource, index }) => {
  const {
    container,
    content,
    h4,
    imageContainer,
    externalLinkIconContainer,
    externalLinkIcon,
  } = {
    container: cn(
      'h-fit w-full',
      'flex flex-row',
      'bg-card/50',
      'border border-border rounded-md',
      'hover:border-secondary',
      'transition-color duration-250',
      'relative',
      'group',
    ),
    content: 'p-4',
    h4: 'font-display text-lg font-bold',
    imageContainer: cn(
      'hidden sm:block',
      'relative',
      'aspect-video w-full max-w-1/3',
    ),
    externalLinkIconContainer: cn(
      'absolute top-0 right-0',
      'z-10',
      'size-8 sm:size-10',
      'flex items-center justify-center',
      'rounded-md',
    ),
    externalLinkIcon: cn(
      'icon-[lucide--external-link]',
      'size-4 sm:size-6',
      'text-border',
      'group-hover:text-secondary-200',
      'transition-color duration-250',
    ),
  };

  return (
    <Link
      href={resource.url as Route}
      target={'_blank'}
      className={container}
    >
      <div className={externalLinkIconContainer}>
        <span className={externalLinkIcon}></span>
      </div>
      <div className={imageContainer}>
        <ResourceImage
          resource={resource}
          index={index}
        />
      </div>
      <div className={content}>
        <h4 className={h4}>{resource.title}</h4>
        <p>{resource.description}</p>
      </div>
    </Link>
  );
};

export default ExternalResourceCard;
