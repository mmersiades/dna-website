import sheetsApi from '@/app/services/SheetsApi';
import ParticipantsAgreementForm from '@/components/participants-agreement/ParticipantsAgreementForm';
import { env } from '@/env';

export default async function ParticipantsAgreementFormViewModel({
  agreementVersion,
}: {
  agreementVersion: number;
}) {
  const data = await sheetsApi.getSheetData(
    env.GOOGLE_SHEETS_PARTICIPANTS_AGREEMENT_SHEET_ID,
    'Sheet1',
  );
  sheetsApi.setParticipantAgreementData(data);

  return <ParticipantsAgreementForm agreementVersion={agreementVersion} />;
}
