'use client';
import { generateBackgroundImageProps } from '@/app/actions';
import cn from '@/utils/cn';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

const LandingBackgroundImage: FC = () => {
  const { resolvedTheme } = useTheme();
  const [position, setPosition] = useState<string | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [darkSrc, setDarkSrc] = useState<string | null>(null);
  const [altText, setAltText] = useState<string | null>();

  const initialise = async () => {
    const { position, darkSrc, src, altText } =
      await generateBackgroundImageProps();
    setSrc(src);
    setAltText(altText);
    setPosition(position);
    setDarkSrc(darkSrc);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void initialise();
  }, []);

  if (!src || !darkSrc || !altText || !position) return null;

  const resolvedSrc = resolvedTheme === 'dark' ? darkSrc : src;

  return (
    <div className={cn('absolute h-1/2 w-1/2 lg:h-1/3 lg:w-1/3', position)}>
      <Image
        fill
        src={resolvedSrc}
        alt={altText}
      />
    </div>
  );
};

export default LandingBackgroundImage;
