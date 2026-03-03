import GroupPhoto from '@/components/local/GroupPhoto';
import styles from '@/components/local/styles';
import { cardStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { urlFor } from '@/sanity/lib/image';
import { ONLINE_GROUPS_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import { Route } from 'next';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  group: ONLINE_GROUPS_QUERYResult[0];
  index: number;
}

const OnlineGroupCard: FC<Props> = ({ group, index }) => {
  const { groupUrl } = copy.online;
  const { linkContainer, linkLabel } = styles;
  const { container, content, anchorContainer } = {
    container: cn('bg-card/50', 'border border-border rounded-md', 'w-full'),
    content: 'p-4',
    anchorContainer: cn('mt-2', 'w-fit', 'ml-auto'),
  };

  const { cardHeading } = cardStyles;

  return (
    <div className={container}>
      <div>
        {group.image && (
          <GroupPhoto
            src={urlFor(group.image).url()}
            index={index}
            altText={group.image.alt ?? `Image for ${group.title}`}
            _type={group.image._type}
          />
        )}
        <h4 className={cn(cardHeading, 'pt-2')}>{group.title}</h4>
      </div>
      <div className={content}>
        <p>{group.description}</p>
        {group.url && (
          <div className={anchorContainer}>
            <Link
              className={linkContainer}
              href={group.url as Route}
              target={'_blank'}
            >
              <p className={linkLabel}>{groupUrl}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineGroupCard;
