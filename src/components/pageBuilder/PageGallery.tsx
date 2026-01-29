import { urlFor } from '@/sanity/lib/image';
import { Gallery } from '@/sanity/types';
import Image from 'next/image';
import { FC } from 'react';

const PageGallery: FC<Gallery> = ({ images }) => {
  if (!images) return null;
  return (
    <div className={'grid grid-cols-2 gap-4'}>
      {images.map((image, index) => {
        if (!image.asset?._ref) return null;
        return (
          <div key={index}>
            <Image
              src={urlFor(image).url()}
              alt={image.alt ?? ''}
              width={250}
              height={250}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PageGallery;
