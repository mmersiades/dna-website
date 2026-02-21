import cn from '@/utils/cn';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

const SubmitButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  const { submitButton } = {
    submitButton: cn(
      'text-lg font-bold text-primary-foreground',
      'h-10',
      'cursor-pointer',
      'bg-primary-200 dark:bg-primary',
      'bg-radial from-primary-200 to-primary-400/75 dark:from-primary dark:to-primary-500/50',
      'border-2 border-primary-800 rounded-lg dark:border-0',
      'p-2',
      'relative',
      'before:content-[""] before:absolute before:rounded-lg before:opacity-0 before:inset-0',
      'before:bg-radial before:from-primary-100 before:to-primary-300',
      'dark:before:from-primary-200 dark:before:to-primary',
      'hover:before:opacity-100',
      'before:transition-opacity duration-250',
    ),
  };

  return (
    <button
      className={submitButton}
      {...props}
    >
      <span className="relative z-10">{props.children}</span>
    </button>
  );
};

export default SubmitButton;
