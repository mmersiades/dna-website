'use client';
import IconButton from '@/components/buttons/IconButton';
import useScreenWidth from '@/hooks/useScreenWidth';
import cn from '@/utils/cn';
import { FC, MouseEvent, PropsWithChildren, useEffect, useRef } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileFullScreenModal: FC<PropsWithChildren<Props>> = ({
  open,
  onClose,
  children,
}) => {
  const screenWidth = useScreenWidth();

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (dialogElement) {
      if (open) {
        if (typeof dialogElement.showModal === 'function') {
          dialogElement.showModal();
        }
      } else {
        dialogElement.close();
      }
    }
  }, [open]);

  if (screenWidth >= 768) return null;

  const { container, content } = {
    container: cn([
      'w-svw h-svh max-w-none max-h-none',
      'bg-tertiary-800 text-background',
      // Base transition state (closed)
      'opacity-0 translate-y-4 duration-250',
      'transition transition-discrete',
      // Open state
      'open:opacity-100 open:translate-y-0',
      // Entry animation
      'starting:open:opacity-0 starting:open:translate-y-4',
    ]),
    content: cn('p-4', 'flex items-center justify-center'),
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className={container}
    >
      <IconButton
        aria-expanded={open}
        iconName={'icon-[lucide--x]'}
        srName={'Close dialog'}
        size={'size-12'}
        aria-label={'Close dialog'}
        onClick={onClose}
      />
      <div className={content}>{children}</div>
    </dialog>
  );
};

export default MobileFullScreenModal;
