import { cardStyles } from '@/components/styles';
import cn from '@/utils/cn';
import { FC } from 'react';

const NationalGroupCardSkeleton: FC = () => {
  const { cardHeading } = cardStyles;

  const { container, content, imageContainer, image } = {
    container: cn(
      'bg-muted/25',
      'border border-muted rounded-md',
      'w-full',
      'text-start',
    ),
    content: 'p-4',
    imageContainer: cn('rounded-t-md', 'aspect-video', 'bg-muted/50'),
    image: cn('rounded-t-md', 'aspect-video'),
  };

  return (
    <div className={container}>
      <div>
        <div className={imageContainer}>
          <div className={image} />
        </div>
        <h4 className={cn(cardHeading, 'text-muted pt-2')}>Group</h4>
      </div>
      <div className={content}>
        <div className={'bg-muted h-30 w-full'}></div>
      </div>
    </div>
  );
};

export default NationalGroupCardSkeleton;
