import ParticipantsAgreementViewModel from '@/components/participants-agreement/ParticipantsAgreementViewModel';
import { pageStyles } from '@/components/styles';
import { Suspense } from 'react';

export default async function ParticipantsAgreementPage() {
  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>
      <Suspense fallback={<p>TODO: Loading participants agreement...</p>}>
        <ParticipantsAgreementViewModel />
      </Suspense>
    </div>
  );
}
