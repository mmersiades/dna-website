import GroupActivityDisplay from '@/components/local/GroupActivityDisplay';
import GroupContactsDisplay from '@/components/local/GroupContactsDisplay';
import GroupPhoto from '@/components/local/GroupPhoto';
import styles from '@/components/local/styles';
import { urlFor } from '@/sanity/lib/image';
import { GROUPS_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import { FC } from 'react';

interface Props {
  group: GROUPS_QUERYResult[number];
}

const GroupCard: FC<Props> = ({ group }) => {
  const { container, header, content } = {
    container: cn(
      'bg-card/50',
      'border border-border rounded-md',
      'w-full',
      '',
      '',
    ),
    header: cn([
      'rounded-t-md',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      // ..
    ]),
    content: cn([
      'p-4',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      //..
    ]),
  };
  const { cardHeading } = styles;
  return (
    <div className={container}>
      <div className={header}>
        {group.groupPhoto && (
          <GroupPhoto
            {...group.groupPhoto}
            src={urlFor(group.groupPhoto).url()}
          />
        )}
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
