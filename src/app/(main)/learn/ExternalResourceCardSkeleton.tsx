'use client';
import cn from '@/utils/cn';
import { FC } from 'react';

const ExternalResourceCardSkeleton: FC = () => {
  const { container, content, imageContainer, image } = {
    container: cn(
      'h-fit w-full',
      'flex flex-row',
      'bg-muted/25',
      'border border-muted rounded-md',
    ),
    content: 'p-4 w-full flex flex-col gap-2',
    imageContainer: cn(
      'hidden sm:block',
      'relative',
      'aspect-video w-full max-w-1/3',
    ),
    image: 'h-full min-w-1/3 rounded-l-md bg-muted/50',
  };

  return (
    <div className={container}>
      <div className={imageContainer}>
        <div className={image} />
      </div>
      <div className={content}>
        <div className={'bg-muted h-7 w-full'}></div>
        <div className={'bg-muted h-14 w-full'}></div>
      </div>
    </div>
  );
};

export default ExternalResourceCardSkeleton;
