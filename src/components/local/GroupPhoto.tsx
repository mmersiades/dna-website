import { GROUPS_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import generatePhotoSizes from '@/utils/generatePhotoSizes';
import Image from 'next/image';
import { FC } from 'react';

type Props = NonNullable<GROUPS_QUERYResult[number]['groupPhoto']> & {
  src: string;
  index: number; // 0-based
};

const GroupPhoto: FC<Props> = ({
  src,
  altText,
  attribution,
  caption,
  index,
}) => {
  const { container, image, captionContainer, text } = {
    container: cn('rounded-t-md', 'relative', 'aspect-video'),
    image: cn('rounded-t-md', 'object-cover', 'aspect-video'),
    captionContainer: cn(
      'absolute bottom-0 left-0 right-0',
      'bg-black/50',
      'flex flex-row gap-2 items-center justify-between',
      'px-2',
    ),
    text: cn('text-white', 'font-bold', 'text-sm'),
  };
  return (
    <div className={container}>
      <Image
        className={image}
        src={src}
        alt={altText ?? 'Photo of local Degrowth group'}
        fill
        sizes={generatePhotoSizes({
          mobile: 580,
          sm: 600,
          md: 360, // Smaller because two columns
          lg: 490,
          xl: 620,
          xxl: 750,
        })}
        loading={index < 2 ? 'eager' : 'lazy'}
      />
      {caption ||
        (attribution && (
          <div className={captionContainer}>
            {caption && (
              <p className={text}>
                <small>{caption}</small>
              </p>
            )}
            {attribution && (
              <p className={text}>
                <small>{attribution}</small>
              </p>
            )}
          </div>
        ))}
    </div>
  );
};

export default GroupPhoto;
