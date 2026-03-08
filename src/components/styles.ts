import cn from '@/utils/cn';

export const iconButton = {
  icon: cn(
    'size-full',
    'block',
    'text-black font-bold dark:text-white',
    'hover:text-secondary-500 dark:hover:text-secondary',
    'transition-color duration-250',
  ),
  button: cn('p-2', 'bg-transparent', 'cursor-pointer'),
};

export const pageStyles = {
  pageContainer: 'container mr-auto ml-auto',
  pageTitle: 'text-3xl sm:text-4xl lg:text-5xl font-bold px-2',
  pageDivider: 'text-tertiary-500/50 dark:text-tertiary/50 mt-2 mb-4 mx-2',
  sectionContainer: 'my-8 px-2',
  anchor: cn(
    'font-bold',
    'decoration-transparent',
    'text-secondary-600 dark:text-secondary',
    'hover:text-secondary hover:dark:text-secondary-200 hover:underline',
    'hover:decoration-secondary hover:dark:decoration-secondary-200',
    'transition duration-200',
    'transition-[color,text-decoration-color] duration-250',
    'visited:text-secondary-500 visited:dark:text-secondary-400',
  ),
};

export const cardStyles = {
  cardHeading: 'text-center text-xl lg:text-2xl font-bold',
  cardSubHeading: 'font-display py-2 font-bold lg:text-lg',
  cardListContainer: 'flex flex-wrap gap-2',
};
