import cn from '@/utils/cn';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { submitting: boolean };

const SubmitButton: FC<Props> = ({ submitting, disabled, ...props }) => {
  const { submitButton } = {
    submitButton: cn(
      'text-lg font-bold',
      'h-10 w-full',
      submitting ? 'cursor-wait opacity-50' : 'cursor-pointer',
      disabled ? 'cursor-default opacity-50' : 'cursor-pointer',
      'border-2 border-primary rounded-lg',
      'p-2',
      'relative',
      'after:content-[""] after:absolute after:rounded-md after:inset-0 after:opacity-50',
      'after:bg-radial after:from-primary after:to-transparent',
      !disabled && !submitting && 'hover:after:opacity-75',
      'before:transition-opacity duration-250',
    ),
  };

  return (
    <button
      className={submitButton}
      disabled={disabled || submitting}
      {...props}
    >
      <span className="relative z-10">{props.children}</span>
    </button>
  );
};

export default SubmitButton;
