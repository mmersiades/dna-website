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
      />
    </picture>
  );
};

export default Wordmark;
