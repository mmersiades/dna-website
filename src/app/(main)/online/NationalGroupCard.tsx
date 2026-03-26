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
  onSelectGroup: (group: ONLINE_GROUPS_QUERYResult[0]) => void;
  selected: boolean;
}

const NationalGroupCard: FC<Props> = ({
  group,
  index,
  onSelectGroup,
  selected,
}) => {
  const { groupUrl } = copy.national;
  const { linkContainer, linkLabel } = styles;
  const { cardHeading, externalLinkIcon } = cardStyles;

  const { container, content, anchorContainer, checkIcon } = {
    container: cn(
      'bg-card/50',
      'border rounded-md',
      selected
        ? 'border border-primary outline-primary outline-solid bg-primary-100/10'
        : 'border border-border',
      'w-full',
      'cursor-pointer',
      !selected && 'hover:border-primary',
      'transition-color duration-250',
      'text-start',
      'group',
    ),
    content: 'p-4',
    anchorContainer: cn(
      'mt-2',
      'w-full',
      'flex flex-row justify-between items-center',
    ),
    checkIcon: cn(
      'icon-[lucide--circle-check]',
      'text-5xl',
      'bg-primary',
      !selected && 'opacity-0',
    ),
  };

  return (
    <button
      role={'button'}
      className={container}
      onClick={() => onSelectGroup(group)}
    >
      <div>
        {group.image && (
          <GroupPhoto
            src={urlFor(group.image).url()}
            index={index}
            altText={group.image.alt ?? `Image for ${group.title}`}
            _type={group.image._type}
          />
        )}
        <h4 className={cn(cardHeading, 'pt-2')}>
          {group.title}
          <span
            className={cn(externalLinkIcon, 'icon-[lucide--panel-top-open]')}
          ></span>
        </h4>
      </div>
      <div className={content}>
        <p>{group.description}</p>
        {group.url && (
          <div className={anchorContainer}>
            <span className={checkIcon}></span>
            <Link
              className={linkContainer}
              href={group.url as Route}
              target={'_blank'}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <p className={linkLabel}>{groupUrl}</p>
            </Link>
          </div>
        )}
      </div>
    </button>
  );
};

export default NationalGroupCard;
