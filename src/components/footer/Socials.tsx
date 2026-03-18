import styles from '@/components/footer/styles';
import copy from '@/constants/copy';
import cn from '@/utils/cn';
import { Route } from 'next';
import Link from 'next/link';
import { FC } from 'react';

interface IconProps {
  icon: string;
  url: Route;
  networkName: string;
  name: string;
}

const SocialIcon: FC<IconProps> = ({
  url,
  icon: iconName,
  networkName,
  name,
}) => {
  const { icon, container, externalLinkIconContainer, externalLinkIcon } = {
    container: cn([
      'flex items-center flex-wrap gap-4 md:gap-8',
      'border-1 border-tertiary-700 rounded-lg',
      'hover:border-secondary',
      'p-4 md:p-8',
      'transition-color duration-250',
      'relative',
      'after:absolute after:inset-0 after:opacity-0 after:rounded-lg',
      'after:bg-radial after:from-secondary/25 after:to-transparent',
      'hover:after:opacity-100',
      'after:transition-opacity after:duration-250',
      'group',
    ]),
    icon: cn([
      'size-12 lg:size-16 z-10',
      'bg-radial from-secondary-200 to-secondary-400',
    ]),
    externalLinkIconContainer: cn(
      'absolute top-0 right-0',
      'z-10 ',
      'size-8 sm:size-10',
      'flex items-center justify-center',
      'rounded-md',
    ),
    externalLinkIcon: cn(
      'icon-[lucide--external-link]',
      'size-4 sm:size-6',
      'text-tertiary-700',
      'group-hover:text-secondary-200',
      'transition-color duration-250',
    ),
  };
  return (
    <Link
      className={container}
      href={url}
      target={'_blank'}
    >
      <div className={externalLinkIconContainer}>
        <span className={externalLinkIcon}></span>
      </div>
      <span className={cn([icon, iconName])}></span>
      <div className={'flex flex-col'}>
        <p className={'font-display z-10'}>{networkName}</p>
        <p className={'font-display z-10'}>{name}</p>
      </div>
    </Link>
  );
};

const Socials: FC<{ id: string }> = ({ id }) => {
  const { title: socialsTitle, networks } = copy.footer.socials;
  const { title, divider } = styles;

  return (
    <div>
      <h4
        id={id}
        className={title}
      >
        {socialsTitle}
      </h4>
      <hr className={divider} />
      <div className={'flex flex-wrap justify-start gap-4 md:gap-8 lg:gap-16'}>
        {networks.map((prop) => (
          <SocialIcon
            key={prop.icon}
            {...prop}
          />
        ))}
      </div>
    </div>
  );
};

export default Socials;
