import ParticipantsAgreementSection from '@/app/(main)/participants-agreement/ParticipantsAgreementSection';
import { fetchSanityParticipantsAgreement } from '@/app/actions';
import { notFound } from 'next/navigation';

export default async function ParticipantsAgreementViewModel() {
  const data = await fetchSanityParticipantsAgreement();

  if (!data) return notFound();

  return <ParticipantsAgreementSection data={data} />;
}
