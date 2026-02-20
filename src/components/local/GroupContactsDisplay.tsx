'use client';
import GroupLink from '@/components/local/GroupLink';
import styles from '@/components/local/styles';
import { GroupLink as GroupLinkProps } from '@/sanity/types';
import cn from '@/utils/cn';
import {
  offset,
  size,
  useFloating,
  useTransitionStyles,
} from '@floating-ui/react';
import Link from 'next/link';
import { FC, useState } from 'react';

const EmailButton: FC<{ email: string }> = ({ email }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom',
    middleware: [
      // Assumes placement is 'bottom' (the default)
      offset(({ rects }) => {
        return -rects.reference.height / 2 - rects.floating.height / 2;
      }),
      size({
        apply({ elements }) {
          const rect = elements.reference.getBoundingClientRect();
          const anchorWidth = rect.width;
          const anchorHeight = rect.height;
          Object.assign(elements.floating.style, {
            width: `${anchorWidth}px`,
            height: `${anchorHeight}px`,
          });
        },
      }),
    ],
  });

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: {
      open: 100,
      close: 500,
    },
    initial: {
      opacity: 0,
      transform: 'scale(0.8)',
    },
    close: {
      opacity: 0,
      transform: 'scale(1.2)',
    },
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsOpen(true);

      // Auto-hide after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const { linkIcon, linkContainer, linkLabel } = styles;

  const { container, popoverPlacement, popoverContainer, popoverText } = {
    container: 'hover:cursor-pointer',
    popoverPlacement: 'z-20 flex',
    popoverContainer: cn(
      'flex items-center justify-center',
      'p-2',
      'rounded-lg',
      'bg-primary',
    ),
    popoverText: 'text-center font-bold',
  };

  return (
    <>
      <div
        ref={refs.setReference}
        className={cn([linkContainer, container])}
        onClick={handleCopy}
      >
        <span className={cn([linkIcon, 'icon-[lucide--mail]'])}></span>
        <p className={linkLabel}>Email</p>
      </div>
      {isMounted && (
        <div
          // eslint-disable-next-line react-hooks/refs
          ref={refs.setFloating}
          style={floatingStyles}
          className={popoverPlacement}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{ ...transitionStyles }}
            className={popoverContainer}
          >
            <p className={popoverText}>Email copied</p>
          </div>
        </div>
      )}
    </>
  );
};

const WebsiteLink: FC<{ website: string }> = ({ website }) => {
  const { linkIcon, linkContainer, linkLabel } = styles;

  return (
    <Link
      className={linkContainer}
      href={website}
      target={'_blank'}
    >
      <span className={cn([linkIcon, 'icon-[lucide--link]'])}></span>
      <p className={linkLabel}>Website</p>
    </Link>
  );
};

interface Props {
  email: string | null;
  website: string | null;
  links: ({ _key: string } & GroupLinkProps)[] | null;
}

const GroupContactsDisplay: FC<Props> = ({ email, website, links }) => {
  if (!email && !website && !links) return null;

  const { cardSubHeading, cardListContainer } = styles;

  return (
    <>
      <h6 className={cardSubHeading}>Contact</h6>
      <div className={cardListContainer}>
        {email && <EmailButton email={email} />}
        {website && <WebsiteLink website={website} />}
        {links?.map((a) => (
          <GroupLink
            key={a._key}
            {...a}
          />
        ))}
      </div>
    </>
  );
};

export default GroupContactsDisplay;
