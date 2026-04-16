'use client';
import { generateWallpaperImageProps } from '@/app/actions';
import cn from '@/utils/cn';
import Image from 'next/image';
import { FC, useCallback, useEffect, useState } from 'react';

export interface WallPaperImageProps {
  src: string;
  darkSrc: string;
  index: number;
  padding?: string;
  flip?: 'no-flip' | 'on-right' | 'on-left';
}

const WallPaperImage: FC<WallPaperImageProps> = ({
  src,
  darkSrc,
  index,
  padding = 'p-2 md:p-4 lg:p-8',
  flip = 'no-flip',
}) => {
  const { wallpaperImageContainer, wallpaperImage } = {
    wallpaperImageContainer: cn(
      'relative',
      'top-0',
      'my-8',
      'w-full h-1/2',
      'overflow-hidden',
      '-z-1',
    ),
    wallpaperImage: cn('object-fit', 'opacity-50'),
  };

  let position;
  let flipClass = '';
  if (index % 2 === 0) {
    position = '-left-1/3';
    if (flip === 'on-left') {
      flipClass = '-scale-x-100';
    }
  } else {
    position = '-right-1/3';
    if (flip === 'on-right') {
      flipClass = '-scale-x-100';
    }
  }

  return (
    <div className={cn(wallpaperImageContainer, position, padding)}>
      <picture className={'relative h-full w-full'}>
        <source
          srcSet={darkSrc}
          media="(prefers-color-scheme: dark)"
        />
        <Image
          className={cn(wallpaperImage, flipClass)}
          src={src}
          alt={''}
          aria-hidden={true}
          fill
        />
      </picture>
    </div>
  );
};

interface Props {
  imageCount: number;
  additionalClasses?: string;
}

const PageBackground: FC<Props> = ({ additionalClasses, imageCount }) => {
  const [images, setImages] = useState<Omit<WallPaperImageProps, 'index'>[]>(
    [],
  );

  const initialise = useCallback(async () => {
    const images = await generateWallpaperImageProps(imageCount);
    setImages(images);
  }, [imageCount]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void initialise();
  }, [initialise]);

  const { wallpaperContainer } = {
    wallpaperContainer: cn('absolute', 'inset-0', additionalClasses),
  };

  return (
    <div className={'overflow-x-hidden'}>
      <div className={wallpaperContainer}>
        {images.map((image, index) => {
          return (
            <WallPaperImage
              key={image.src + index}
              {...image}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PageBackground;
