'use client';
import cn from '@/utils/cn';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

interface Props {
  type: 'snails' | 'flower-bees';
  altText: string;
}

// A placeholder to fill space in a grid. Only visible on medium and larger screens where there are two columns in the grid
const GridCardPlaceholder: FC<Props> = ({ type, altText }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  let src;

  switch (type) {
    case 'flower-bees':
      src =
        resolvedTheme === 'dark'
          ? '/flower-bees-stippled-dark.svg'
          : '/flower-bees-stippled-light.svg';
      break;
    case 'snails':
      src =
        resolvedTheme === 'dark'
          ? '/snails-stippled-dark.svg'
          : '/snails-stippled-light.svg';
      break;
  }

  return (
    <div className={container}>
      <Image
        src={src}
        alt={altText}
        fill
        className={image}
      />
    </div>
  );
};

export default GridCardPlaceholder;
