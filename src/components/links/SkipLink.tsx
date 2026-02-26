import cn from '@/utils/cn';
import Link from 'next/link';
import { FC } from 'react';

const SkipLink: FC = () => {
  const { link } = {
    link: cn([
      'text-xl sm:text-2xl md:text-lg lg:text-lg xl:text-xl',
      'font-bold',
      'absolute',
      'left-1 right-1 top-1',
      'h-[calc(var(--header-height)-var(--spacing))]',
      'z-30',
      'bg-tertiary-200 dark:bg-tertiary-900',
      'flex items-center justify-center',
      '-translate-y-(--header-height)',
      'opacity-0',
      'outline-offset-0',
      'px-1',
      'focus:translate-y-0 focus:opacity-100',
      'transition-opacity duration-250',
    ]),
  };
  return (
    <Link
      className={cn(link)}
      href={'#main-content'}
    >
      Skip to Content
    </Link>
  );
};

export default SkipLink;
