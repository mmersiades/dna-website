import JoinNationalGroupForm from '@/app/(main)/national/JoinNationalGroupForm';
import { ONLINE_GROUPS_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import { FC, useEffect, useRef } from 'react';

interface Props {
  selectedGroup: ONLINE_GROUPS_QUERYResult[0] | null;
  onSubmit: () => void;
  onClickOutside: () => void;
}

const DesktopJoinForm: FC<Props> = ({
  selectedGroup,
  onSubmit,
  onClickOutside,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { formContainer, formInnerContainer, formInnerInnerContainer } = {
    formContainer: cn(
      'absolute top-(--header-height) left-1/2 -translate-x-1/2 w-[calc(100vw+10px)]',
      'min-h-(--header-height)',
      'bg-tertiary-800',
      selectedGroup ? 'opacity-100 block' : 'opacity-0 hidden',
      'starting:opacity-0 starting:translate-y-4 starting:scale-y-500',
      'scale-y-100',
      'transition-all transition-discrete duration-250',
      'z-1',
    ),
    formInnerContainer: cn('container ml-auto mr-auto'),
    formInnerInnerContainer: cn('mx-4 py-4', 'border-b border-tertiary-700'),
  };

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        selectedGroup &&
        ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    };

    window.addEventListener('mousedown', handleOutSideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref, selectedGroup]);

  return (
    <div
      ref={ref}
      className={formContainer}
    >
      <div className={formInnerContainer}>
        <div className={formInnerInnerContainer}>
          {selectedGroup && (
            <JoinNationalGroupForm
              selectedGroup={selectedGroup}
              aria-label={'Join online group form (desktop)'}
              onSubmit={onSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopJoinForm;
