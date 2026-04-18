import generatePhotoSizes from '@/utils/generatePhotoSizes';
import Image from 'next/image';
import { FC } from 'react';

const Wordmark: FC = () => {
  return (
    <picture className={'relative h-full w-full'}>
      <source
        srcSet={'/dna-wordmark-dark.webp'}
        media="(prefers-color-scheme: dark)"
      />
      <Image
        src={'/dna-wordmark-light.webp'}
        alt={'Degrowth Network Australia wordmark'}
        fill
        priority
        sizes={generatePhotoSizes({
          mobile: 57.59,
          sm: 57.59,
          md: 57.59,
          lg: 76.8,
          xl: 76.8,
          xxl: 76.8,
        })}
      />
    </picture>
  );
};

export default Wordmark;
