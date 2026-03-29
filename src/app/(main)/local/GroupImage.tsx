'use client';
import { GroupPhotoProps } from '@/app/(main)/local/GroupPhoto';
import cn from '@/utils/cn';
import generatePhotoSizes from '@/utils/generatePhotoSizes';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

type Props = Pick<GroupPhotoProps, 'src' | 'altText' | 'index'>;

const GroupImage: FC<Props> = ({ src, index, altText }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { image, placeholder } = {
    image: cn(
      'rounded-t-md',
      'object-cover',
      'aspect-video',
      'dark:brightness-90',
    ),
    placeholder: 'rounded-l-md p-4',
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (src) {
    return (
      <Image
        className={image}
        src={src}
        alt={altText ?? 'Photo of local Degrowth group'}
        fill
        sizes={generatePhotoSizes({
          mobile: 580,
          sm: 600,
          md: 360, // Smaller because two columns
          lg: 490,
          xl: 620,
          xxl: 750,
        })}
        loading={index === 0 || (index && index < 2) ? 'eager' : 'lazy'}
      />
    );
  } else {
    if (!mounted) return null;

    const src =
      resolvedTheme === 'dark'
        ? '/birdhouse-stippled-dark.svg'
        : '/birdhouse-stippled-light.svg';

    return (
      <Image
        src={src}
        alt={`Image placeholder`}
        fill
        className={placeholder}
      />
    );
  }
};

export default GroupImage;
