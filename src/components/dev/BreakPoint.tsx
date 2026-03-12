import cn from '@/utils/cn';
import { FC } from 'react';

const env = process.env.NODE_ENV;

const BreakPoint: FC = () => {
  const isDev = env === 'development';
  const isStorybook = process.env.STORYBOOK === 'true';

  if (isStorybook) return null;

  const { text, mobile, small, medium, xLarge, large, twoXLarge } = {
    text: 'text-xs font-sans text-foreground dark:text-foreground',
    mobile: 'visible sm:hidden',
    small: 'hidden sm:max-md:visible sm:max-md:block',
    medium: 'hidden md:max-lg:visible md:max-lg:block',
    large: 'hidden lg:max-xl:visible lg:max-xl:block',
    xLarge: 'hidden xl:max-2xl:visible xl:max-2xl:block',
    twoXLarge: 'hidden 2xl:visible 2xl:block',
  };

  if (isDev) {
    return (
      <>
        <p className={cn(mobile, text)}>MOBILE</p>
        <p className={cn(small, text)}>SM</p>
        <p className={cn(medium, text)}>MD</p>
        <p className={cn(large, text)}>LG</p>
        <p className={cn(xLarge, text)}>XL</p>
        <p className={cn(twoXLarge, text)}>2XL</p>
      </>
    );
  }

  return null;
};

export default BreakPoint;
