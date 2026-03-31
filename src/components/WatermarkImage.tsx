import Image from 'next/image';
import { FC } from 'react';

export interface WatermarkImageProps {
  type: 'snails' | 'flower-bees' | 'bee-1' | 'bee-1-footer';
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
