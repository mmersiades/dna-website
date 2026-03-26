import ParticipantsAgreementViewModel from '@/app/(main)/participants-agreement/ParticipantsAgreementViewModel';
import ParticipantsAgreementViewSkeleton from '@/app/(main)/participants-agreement/ParticipantsAgreementViewSkeleton';
import { pageStyles } from '@/components/styles';
import { Suspense } from 'react';

export default async function ParticipantsAgreementPage() {
  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>
      <Suspense fallback={<ParticipantsAgreementViewSkeleton />}>
        <ParticipantsAgreementViewModel />
      </Suspense>
    </div>
  );
}
