import styles from '@/components/footer/styles';
import cn from '@/utils/cn';
import Link from 'next/link';
import { FC } from 'react';

interface IconProps {
  icon: string;
  url: string;
  networkName: string;
  name: string;
}

const socialIcons: IconProps[] = [
  {
    icon: 'icon-[lucide--facebook]',
    url: 'https://www.facebook.com/degrowthnetworkaustralia',
    networkName: 'Facebook',
    name: 'Degrowth Network Australia',
  },
  {
    icon: 'icon-[lucide--instagram]',
    url: 'https://www.instagram.com/degrowthnetworkaustralia',
    networkName: 'Instagram',
    name: 'DNA (@degrowthnetworkaustralia)',
  },
];

const SocialIcon: FC<IconProps> = ({
  url,
  icon: iconName,
  networkName,
  name,
}) => {
  const { icon, container } = {
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
    ]),
    icon: cn([
      'size-12 lg:size-16 z-10',
      'bg-radial from-secondary-200 to-secondary-400',
    ]),
  };
  return (
    <Link
      className={container}
      href={url}
      target={'_blank'}
    >
      <span className={cn([icon, iconName])}></span>
      <div className={'flex flex-col'}>
        <p className={'font-display z-10'}>{networkName}</p>
        <p className={'font-display z-10'}>{name}</p>
      </div>
    </Link>
  );
};

const Socials: FC<{ id: string }> = ({ id }) => {
  const { container, title, divider } = styles;

  return (
    <div className={container}>
      <h4
        id={id}
        className={title}
      >
        Socials
      </h4>
      <hr className={divider} />
      <div className={'flex flex-wrap justify-around gap-8 lg:gap-16'}>
        {socialIcons.map((prop) => (
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
