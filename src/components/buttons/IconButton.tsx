'use client';
import { iconButton } from '@/components/styles';
import cn from '@/utils/cn';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

type TWSize =
  | 'size-1'
  | 'size-2'
  | 'size-4'
  | 'size-6'
  | 'size-8'
  | 'size-10'
  | 'size-12'
  | 'size-16';

type TWLucideIcon =
  | 'icon-[lucide--menu]'
  | 'icon-[lucide--x]'
  | 'icon-[lucide--chevron-left]'
  | 'icon-[lucide--chevron-right]'
  | 'icon-[lucide--link]';

interface IconButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  iconName: TWLucideIcon;
  srName: string;
  round?: boolean;
  size?: TWSize;
  onDark?: boolean;
}

const IconButton: FC<IconButtonProps> = ({
  iconName,
  srName,
  round = false,
  size = 'size-6',
  onDark = false,
  ...props
}) => {
  const { icon, button } = iconButton;

  return (
    <button
      role={'button'}
      className={cn([
        button,
        size,
        round && 'rounded-full',
        onDark && 'hover:text-secondary text-white',
      ])}
      {...props}
    >
      <span className={cn([icon, iconName])}></span>
      <span className="sr-only">{srName}</span>
    </button>
  );
};

export default IconButton;
