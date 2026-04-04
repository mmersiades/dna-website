import Image from 'next/image';
import { FC } from 'react';

export interface WatermarkImageProps {
  type:
    | 'snails'
    | 'flower-bees'
    | 'bee-1'
    | 'bee-1-footer'
    | 'flower-footer'
    | 'ants'
    | 'ants-footer';
  altText: string;
}

// Provides a light grey / dark grey image (depending on mode) intended as a subtle background image
const WatermarkImage: FC<WatermarkImageProps> = ({ type, altText }) => {
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
    case 'bee-1':
      src = '/bee-1-light.svg';
      darkSrc = '/bee-1-dark.svg';
      break;
    case 'bee-1-footer':
      src = '/bee-1-footer-light.svg';
      darkSrc = '/bee-1-footer-dark.svg';
      break;
    case 'flower-footer':
      src = '/flower-stippled-footer-light.svg';
      darkSrc = '/flower-stippled-footer-dark.svg';
      break;
    case 'ants':
      src = '/ants-stippled-light.svg';
      darkSrc = '/ants-stippled-dark.svg';
      break;
    case 'ants-footer':
      src = '/ants-stippled-footer-light.svg';
      darkSrc = '/ants-stippled-footer-dark.svg';
      break;
  }

  return (
    <picture className={'relative h-full w-full'}>
      <source
        srcSet={darkSrc}
        media="(prefers-color-scheme: dark)"
      />
      <Image
        src={src}
        alt={altText}
        fill
        priority
      />
    </picture>
  );
};

export default WatermarkImage;
