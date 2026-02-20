import styles from '@/components/local/styles';
import { GroupLink as Props } from '@/sanity/types';
import cn from '@/utils/cn';
import Link from 'next/link';
import { FC } from 'react';

const GroupLink: FC<Props> = ({ label, url, category }) => {
  const { linkIcon, linkContainer, linkLabel } = styles;

  let iconName = 'icon-[lucide--link]';
  switch (category) {
    case 'facebook':
      iconName = 'icon-[lucide--facebook]';
      break;
    case 'instagram':
      iconName = 'icon-[lucide--instagram]';
      break;
    case 'mailing-list':
      iconName = 'icon-[lucide--inbox]';
      break;
    case 'whatsapp':
    // Deliberately falls through
    case 'substack':
    // Deliberately falls through
    case 'matrix':
    // Deliberately falls through
    default:
    // Deliberately falls through
  }

  return (
    <Link
      className={linkContainer}
      href={url}
      target={'_blank'}
    >
      <span className={cn([linkIcon, iconName])}></span>
      <p className={linkLabel}>{label}</p>
    </Link>
  );
};

export default GroupLink;
