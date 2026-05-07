import GetInvolvedCtaContent from '@/app/(main)/get-involved/GetInvolvedCtaContent';
import { fetchSanityPage } from '@/app/actions';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchSanityPage('get-involved');

  return generateDNAMetadata(page);
}

export default function GetInvolvedPage() {
  return <GetInvolvedCtaContent />;
}
