import ParticipantsAgreementSection from '@/components/participants-agreement/ParticipantsAgreementSection';
import { sanityFetch } from '@/sanity/lib/live';
import { PARTICIPANTS_AGREEMENT_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';

export default async function ParticipantsAgreementViewModel() {
  const { data } = await sanityFetch({
    query: PARTICIPANTS_AGREEMENT_QUERY,
  });

  if (!data) return notFound();

  return <ParticipantsAgreementSection data={data} />;
}
