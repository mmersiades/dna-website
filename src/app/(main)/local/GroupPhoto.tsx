import GroupImage from '@/app/(main)/local/GroupImage';
import { GROUPS_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import { FC } from 'react';

export type GroupPhotoProps = NonNullable<
  GROUPS_QUERYResult[number]['groupPhoto']
> & {
  src?: string;
  index?: number; // 0-based
};

const GroupPhoto: FC<GroupPhotoProps> = ({
  src,
  altText,
  attribution,
  caption,
  index,
}) => {
  const { container, captionContainer, text } = {
    container: cn('rounded-t-md', 'relative', 'aspect-video'),
    captionContainer: cn(
      'absolute bottom-0 left-0 right-0',
      'bg-black/50',
      'flex flex-row gap-2 items-center justify-between',
      'px-2',
    ),
    text: cn('text-white', 'font-bold', 'text-xs', 'py-1'),
  };

  return (
    <div className={container}>
      <GroupImage
        src={src}
        index={index}
        altText={altText}
      />
      {(caption || attribution) && (
        <div className={captionContainer}>
          {caption && <p className={text}>{caption}</p>}
          {attribution && <p className={text}>{attribution}</p>}
        </div>
      )}
    </div>
  );
};

export default GroupPhoto;
