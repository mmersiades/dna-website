// 'use client';
import cn from '@/utils/cn';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  type: 'snails' | 'flower-bees';
  altText: string;
}

// A placeholder to fill space in a grid. Only visible on medium and larger screens where there are two columns in the grid
const GridCardPlaceholder: FC<Props> = ({ type, altText }) => {
  const { container, image } = {
    container: cn(
      'hidden md:flex',
      'items-center justify-center',
      'relative',
      'aspect-video',
      'w-full h-full',
    ),
    image: 'md:p-8 lg:p-20',
  };

  let src;
  let darkSrc;

  switch (type) {
    case 'flower-bees':
      src = '/flower-bees-stippled-light.svg';
      darkSrc = '/flower-bees-stippled-dark.svg';
      break;
    case 'snails':
      src = '/snails-stippled-light.svg';
      darkSrc = '/snails-stippled-dark.svg';
      break;
  }

  return (
    <div className={container}>
      <picture>
        <source
          srcSet={darkSrc}
          media="(prefers-color-scheme: dark)"
        />
        <Image
          src={src}
          alt={altText}
          fill
          className={image}
          priority
        />
      </picture>
    </div>
  );
};

export default GridCardPlaceholder;
