import cn from '@/utils/cn';

const headerStyles = {
  container: cn(
    'bg-tertiary-200 dark:bg-tertiary-900',
    'fixed top-0',
    'w-screen',
    'z-20',
    'shadow-md',
    'text-black dark:text-white',
  ),
  desktopContainer: cn(
    'container',
    'ml-auto mr-auto',
    'h-(--header-height)',
    'hidden md:flex flex-row items-center gap-4 xl:gap-6 2xl:gap-8 justify-start',
    'p-2',
  ),
};

export default headerStyles;
