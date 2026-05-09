import copy from '@/constants/copy';
import cn from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const LandingFooterSpacer: FC = () => {
  const { cta } = copy.header;

  const { link, container, textContainer, picture } = {
    link: cn(
      'flex items-center justify-center',
      'size-70',
      'text-center',
      'font-bold text-3xl lg:text-4xl',
      'font-display',
      'absolute',
      'group',
    ),
    container: cn('h-[30vh]', 'flex items-center justify-center', 'mb-35'),
    textContainer: cn(
      'absolute',
      'size-70',
      'flex items-center justify-center',
      'pointer-events-none',
    ),
    picture: cn(
      'relative h-full w-full',
      'opacity-60 dark:opacity-55 group-hover:opacity-80 group-hover:dark:opacity-75', // Move opacity here
      'transition-opacity duration-300',
    ),
  };

  return (
    <>
      <div className="fallback-header-spacer"></div>
      <div className={container}>
        <Link
          className={link}
          href={cta.href}
        >
          <picture className={picture}>
            <source
              srcSet={'/flower-stippled-coloured-no-outline-dark.svg'}
              media="(prefers-color-scheme: dark)"
            />
            <Image
              src={'/flower-stippled-coloured-no-outline-light.svg'}
              alt={'A folk art flower'}
              fill
              priority
            />
          </picture>
          <div className={textContainer}>
            <span className="mb-20">See more</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default LandingFooterSpacer;
