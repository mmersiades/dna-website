import ParticipantsAgreementViewModel from '@/app/(main)/participants-agreement/ParticipantsAgreementViewModel';
import ParticipantsAgreementViewSkeleton from '@/app/(main)/participants-agreement/ParticipantsAgreementViewSkeleton';
import { fetchParticipantAgreementData } from '@/app/actions';
import { pageStyles } from '@/components/styles';
import { Suspense } from 'react';

export default async function ParticipantsAgreementPage() {
  // Pre-fetching to put in the cache
  await fetchParticipantAgreementData();
  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>
      <Suspense fallback={<ParticipantsAgreementViewSkeleton />}>
        <ParticipantsAgreementViewModel />
      </Suspense>
    </div>
  );
}
