import { GROUPS_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import Image from 'next/image';
import { FC } from 'react';

type Props = NonNullable<GROUPS_QUERYResult[number]['groupPhoto']> & {
  src: string;
};

const GroupPhoto: FC<Props> = ({ src, altText, attribution, caption }) => {
  const { container } = {
    container: cn([
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      // ...
    ]),
  };
  return (
    <div className={container}>
      <Image
        src={src}
        alt={altText ?? 'Photo of local Degrowth group'}
        width={250}
        height={250}
      />
      {caption && <p>{caption}</p>}
      {attribution && <p>{attribution}</p>}
    </div>
  );
};

export default GroupPhoto;
