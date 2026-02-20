import { GROUPS_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import Image from 'next/image';
import { FC } from 'react';

type Props = NonNullable<GROUPS_QUERYResult[number]['groupPhoto']> & {
  src: string;
};

const GroupPhoto: FC<Props> = ({ src, altText, attribution, caption }) => {
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
