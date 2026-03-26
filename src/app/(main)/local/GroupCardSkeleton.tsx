import { cardStyles } from '@/components/styles';
import cn from '@/utils/cn';
import { FC } from 'react';

const GroupCardSkeleton: FC = () => {
  const { container, content, imageContainer, image } = {
    container: cn('bg-card/50', 'border border-border rounded-md', 'w-full'),
    content: 'p-4 flex flex-col gap-2',
    imageContainer: cn('rounded-t-md', 'aspect-video', 'bg-muted/50'),
    image: cn('rounded-t-md', 'aspect-video'),
  };

  const { cardHeading } = cardStyles;

  return (
    <div className={container}>
      <div>
        <div className={imageContainer}>
          <div className={image} />
        </div>
        <h4 className={cn(cardHeading, 'text-muted pt-2')}>Group</h4>
      </div>
      <div className={content}>
        <div className={'bg-muted h-20 w-full'}></div>
        <div className={'bg-muted h-20 w-full'}></div>
      </div>
    </div>
  );
};

export default GroupCardSkeleton;
