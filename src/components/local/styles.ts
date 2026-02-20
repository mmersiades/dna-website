import cn from '@/utils/cn';

const styles = {
  linkContainer: cn(
    'flex flex-col items-center flex-wrap gap-2 md:gap-4',
    'border-2 border-secondary rounded-lg',
    'hover:border-secondary',
    'p-2 md:p-4',
    'transition-color duration-250',
    'relative',
    'after:absolute after:inset-0 after:opacity-0 after:rounded-lg',
    'after:bg-radial after:from-secondary/25 after:to-transparent',
    'hover:after:opacity-100',
    'after:transition-opacity after:duration-250',
  ),
  linkIcon: cn(
    'size-8 lg:size-12 z-10',
    'bg-radial from-secondary-200 to-secondary-400',
  ),
  linkLabel: 'font-display z-10',
  cardHeading: 'text-center text-xl lg:text-2xl font-bold',
  cardSubHeading: 'font-display py-2 font-bold lg:text-lg',
  cardListContainer: 'flex flex-wrap gap-2',
  title: 'text-lg font-bold',
  divider: 'text-tertiary-500/50 dark:text-tertiary/50  mt-2 mb-4',
};

export default styles;
