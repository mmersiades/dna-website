import { fetchParticipantAgreementData } from '@/app/actions';
import ParticipantsAgreementForm from '@/components/participants-agreement/ParticipantsAgreementForm';

export default async function ParticipantsAgreementFormViewModel({
  agreementVersion,
}: {
  agreementVersion: number;
}) {
  // Pre-fetching to put in the cache
  await fetchParticipantAgreementData();

  return <ParticipantsAgreementForm agreementVersion={agreementVersion} />;
}
