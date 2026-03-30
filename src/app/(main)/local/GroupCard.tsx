import GroupActivityDisplay from '@/app/(main)/local/GroupActivityDisplay';
import GroupContactsDisplay from '@/app/(main)/local/GroupContactsDisplay';
import GroupPhoto from '@/app/(main)/local/GroupPhoto';
import { cardStyles } from '@/components/styles';
import { urlFor } from '@/sanity/lib/image';
import { GROUPS_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import { FC } from 'react';

interface Props {
  group: GROUPS_QUERYResult[number];
  index: number; // 0-based
}

const GroupCard: FC<Props> = ({ group, index }) => {
  const { container, content } = {
    container: cn(
      'bg-card/50',
      'border border-border rounded-md',
      'w-full h-full',
    ),
    content: 'p-4',
  };

  const { cardHeading } = cardStyles;

  return (
    <div className={container}>
      <div>
        <GroupPhoto
          {...group.groupPhoto}
          altText={
            group.groupPhoto?.altText ??
            `Placeholder image for ${group.fullName}`
          }
          src={group.groupPhoto ? urlFor(group.groupPhoto).url() : undefined}
          index={index}
          _type={'image'}
        />
        <h4 className={cn(cardHeading, 'pt-2')}>{group.fullName}</h4>
      </div>
      <div className={content}>
        <p>{group.blurb}</p>
        <GroupActivityDisplay activities={group.activities} />
        <GroupContactsDisplay
          email={group.contactEmail}
          website={group.website}
          links={group.links}
        />
      </div>
    </div>
  );
};

export default GroupCard;
