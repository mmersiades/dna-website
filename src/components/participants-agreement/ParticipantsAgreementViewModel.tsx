import { fetchSanityParticipantsAgreement } from '@/app/actions';
import ParticipantsAgreementSection from '@/components/participants-agreement/ParticipantsAgreementSection';
import { notFound } from 'next/navigation';

export default async function ParticipantsAgreementViewModel() {
  const data = await fetchSanityParticipantsAgreement();

  if (!data) return notFound();

  return <ParticipantsAgreementSection data={data} />;
}
