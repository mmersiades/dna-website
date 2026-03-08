import ParticipantsAgreementSection from '@/components/participants-agreement/ParticipantsAgreementSection';
import { pageStyles } from '@/components/styles';
import { sanityFetch } from '@/sanity/lib/live';
import { PARTICIPANTS_AGREEMENT_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';

export default async function ParticipantsAgreementPage() {
  const { data } = await sanityFetch({
    query: PARTICIPANTS_AGREEMENT_QUERY,
  });

  if (!data) return notFound();

  const { pageContainer } = pageStyles;

  return (
    <div className={pageContainer}>
      <ParticipantsAgreementSection data={data} />
    </div>
  );
}
