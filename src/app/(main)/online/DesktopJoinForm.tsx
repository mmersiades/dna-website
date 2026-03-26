import JoinOnlineGroupForm from '@/components/forms/JoinOnlineGroupForm';
import { ONLINE_GROUPS_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import { FC } from 'react';

interface Props {
  selectedGroup: ONLINE_GROUPS_QUERYResult[0] | null;
  onSubmit: () => void;
}

const DesktopJoinForm: FC<Props> = ({ selectedGroup, onSubmit }) => {
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

  return (
    <div className={formContainer}>
      <div className={formInnerContainer}>
        <div className={formInnerInnerContainer}>
          {selectedGroup && (
            <JoinOnlineGroupForm
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
