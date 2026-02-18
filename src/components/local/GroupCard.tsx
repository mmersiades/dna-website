import GroupActivity from '@/components/local/GroupActivity';
import GroupLink from '@/components/local/GroupLink';
import GroupPhoto from '@/components/local/GroupPhoto';
import { urlFor } from '@/sanity/lib/image';
import { GROUPS_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import { FC } from 'react';

interface Props {
  group: GROUPS_QUERYResult[number];
}

const GroupCard: FC<Props> = ({ group }) => {
  const { container } = {
    container: cn(
      'bg-card/50',
      'border border-border rounded-md',
      'p-4',
      '',
      '',
      '',
    ),
  };
  return (
    <div className={container}>
      <p>{group.fullName}</p>
      <p>{group.blurb}</p>
      {group.website && (
        <p>
          Website:{' '}
          <a
            href={group.website}
            target="_blank"
          >
            {group.website}
          </a>
        </p>
      )}
      {group.groupPhoto && (
        <GroupPhoto
          {...group.groupPhoto}
          src={urlFor(group.groupPhoto).url()}
        />
      )}
      {group.contactEmail && <p>{`Email: ${group.contactEmail}`}</p>}
      {group.links?.map((link) => (
        <GroupLink
          key={link._key}
          {...link}
        />
      ))}
      {group.activities?.map((a) => (
        <GroupActivity
          key={a._key}
          {...a}
        />
      ))}
    </div>
  );
};

export default GroupCard;
