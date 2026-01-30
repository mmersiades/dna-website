import cn from '@/utils/cn';

export const textBlockStyles = {
  container: cn([
    'p-4',
    'flow-root',
    'bg-secondary-200 dark:bg-secondary-800',
    'relative',
    'z-2',
  ]),
  text: 'text-md sm:text-xl',
  buttonContainer: cn(['flex', 'mt-2', 'justify-end']),
  relativeAnchor: 'relative max-w-4xl ml-auto mr-auto h-fit',
};

export const anchor = cn([
  'text-tertiary-800 dark:text-tertiary-300',
  'hover:text-tertiary-700 hover:dark:text-tertiary-100',
  'transition duration-200',
]);

export const iconButton = {
  icon: cn([
    'size-full',
    'block',
    'font-foreground font-bold dark:text-shadow-contrast',
  ]),
  button: cn([
    'p-2',
    'bg-transparent',
    `hover:bg-muted dark:hover:shadow-contrast`,
    'cursor-pointer',
    'transition duration-250',
  ]),
};

export const link = cn([
  'font-bold',
  'decoration-transparent',
  'text-secondary-400 dark:text-secondary',
  'hover:text-secondary hover:dark:text-secondary-200 hover:underline',
  'hover:decoration-secondary hover:dark:decoration-secondary-200',
  'transition duration-200',
  'transition-[color,text-decoration-color] duration-250',
  'visited:text-secondary-600 visited:dark:text-secondary-500',
]);
