import cn from '@/utils/cn';

const styles = {
  container: 'my-8',
  title: 'text-lg font-bold',
  divider: 'text-tertiary-700 mt-2 mb-4',
  input: cn(
    'border-1 border-tertiary-500 rounded-lg',
    'focus:outline-primary focus:outline-1 focus:border-primary focus:outline-offset-0',
    'hover:border-primary',
    'px-2',
    'text-lg font-bold',
    'h-full',
    'transition-color duration-250',
  ),
  footerContainer: cn(
    'bg-tertiary-800 dark:bg-tertiary-800',
    'w-screen',
    'text-background dark:text-foreground',
  ),
  innerContainer: cn('mr-auto ml-auto', 'container', 'p-4'),
  grid: cn(
    'grid auto-rows-min',
    'gap-8 xl:gap-12',
    '[column-rule:1px_solid_#ccc]',
    // mobile, sm, md
    'grid-cols-1',
    // lg, xl, 2xl
    'lg:grid-cols-2',
  ),
  anchor: cn(
    'font-bold',
    'decoration-transparent',
    'text-secondary-300 dark:text-secondary',
    'hover:text-secondary hover:dark:text-secondary-200 hover:underline',
    'hover:decoration-secondary hover:dark:decoration-secondary-200',
    'transition duration-200',
    'transition-[color,text-decoration-color] duration-250',
    'visited:text-secondary-500 visited:dark:text-secondary-400',
  ),
};

export default styles;
