import ParticipantsAgreementForm from '@/app/(main)/participants-agreement/ParticipantsAgreementForm';
import { fetchParticipantAgreementData } from '@/app/actions';

export default async function ParticipantsAgreementFormViewModel({
  agreementVersion,
}: {
  agreementVersion: number;
}) {
  // Pre-fetching to put in the cache
  await fetchParticipantAgreementData();

  return <ParticipantsAgreementForm agreementVersion={agreementVersion} />;
}
