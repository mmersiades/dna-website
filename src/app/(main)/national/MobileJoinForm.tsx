import JoinNationalGroupForm from '@/app/(main)/national/JoinNationalGroupForm';
import MobileFullScreenModal from '@/components/MobileFullScreenModal';
import { ONLINE_GROUPS_QUERYResult } from '@/sanity/types';
import { FC } from 'react';

interface Props {
  selectedGroup: ONLINE_GROUPS_QUERYResult[0] | null;
  onClose: () => void;
  onSubmit: () => void;
}

const MobileJoinForm: FC<Props> = ({ selectedGroup, onClose, onSubmit }) => {
  if (!selectedGroup) return null;
  return (
    <MobileFullScreenModal
      open={!!selectedGroup}
      onClose={onClose}
    >
      <JoinNationalGroupForm
        selectedGroup={selectedGroup}
        aria-label={'Join online group form (mobile)'}
        onSubmit={onSubmit}
      />
    </MobileFullScreenModal>
  );
};

export default MobileJoinForm;
