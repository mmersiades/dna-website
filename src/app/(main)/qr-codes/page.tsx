import QrCodeSection from '@/app/(main)/qr-codes/QrCodeSection';
import { pageStyles } from '@/components/styles';

export default async function ParticipantsAgreementPage() {
  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>
      <QrCodeSection />
    </div>
  );
}
