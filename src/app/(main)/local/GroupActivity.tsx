import { cardStyles } from '@/components/styles';
import { GroupActivity as Props } from '@/sanity/types';
import cn from '@/utils/cn';
import { Route } from 'next';
import Link from 'next/link';
import { FC } from 'react';

const GroupActivity: FC<Props> = ({ activityLabel, activityUrl }) => {
  const { externalLinkIcon } = cardStyles;
  const { container, label } = {
    container: cn([
      'border-1 border-tertiary-700 rounded-lg',
      'bg-tertiary',
      'px-2',
      'block',
      'w-max',
      'text-background dark:text-foreground font-semibold',
      activityUrl && 'hover:bg-secondary-400',
      activityUrl && 'hover:border-secondary-700',
      activityUrl && 'transition-color duration-250',
      activityUrl && 'flex flex-row items-center gap-2',
    ]),
    label: 'font-display',
  };

  if (activityUrl) {
    return (
      <Link
        className={container}
        href={activityUrl as Route}
        target={'_blank'}
      >
        <p className={label}>{activityLabel}</p>
        <span className={cn(externalLinkIcon)}></span>
      </Link>
    );
  }

  return (
    <div className={container}>
      <p className={label}>{activityLabel}</p>
    </div>
  );
};

export default GroupActivity;
