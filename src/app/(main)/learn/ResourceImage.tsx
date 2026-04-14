'use client';
import { ResourceCardProps } from '@/app/(main)/learn/ExternalResourceCard';
import generatePhotoSizes from '@/utils/generatePhotoSizes';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

const ResourceImage: FC<ResourceCardProps> = ({ resource, index }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { image, placeholder } = {
    image: 'rounded-l-md object-cover',
    placeholder: 'rounded-l-md p-4',
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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
    if (!mounted) return null;

    const src =
      resolvedTheme === 'dark'
        ? '/birdhouse-stippled-card-dark.svg'
        : '/birdhouse-stippled-card-light.svg';

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

export default ResourceImage;
