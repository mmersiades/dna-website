import styles from '@/components/footer/styles';
import cn from '@/utils/cn';
import Link from 'next/link';
import { FC } from 'react';

interface IconProps {
  icon: string;
  url: string;
  label: string;
}

const socialIcons: IconProps[] = [
  {
    icon: 'icon-[lucide--facebook]',
    url: 'https://www.google.com',
    label: 'Facebook',
  },
  {
    icon: 'icon-[lucide--instagram]',
    url: 'https://www.google.com',
    label: 'Instagram',
  },
  {
    icon: 'icon-[lucide--youtube]',
    url: 'https://www.google.com',
    label: 'Youtube',
  },
];

const SocialIcon: FC<IconProps> = ({ url, icon: iconName, label }) => {
  const { icon, container } = {
    container: cn([
      'flex flex-col items-center',
      'border-1 border-tertiary-700 rounded-lg',
      'hover:border-secondary',
      'p-2 lg:p-4',
      'transition-color duration-250',
      'relative',
      'after:absolute after:inset-0 after:opacity-0 after:rounded-lg',
      'after:bg-radial after:from-secondary/25 after:to-transparent',
      'hover:after:opacity-100',
      'after:transition-opacity after:duration-250',
    ]),
    icon: cn([
      'size-16 lg:size-24 z-10',
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
      <p className={'font-display z-10'}>{label}</p>
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
