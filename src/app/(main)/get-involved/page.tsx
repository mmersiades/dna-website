import GetInvolvedCtaContent from '@/app/(main)/get-involved/GetInvolvedCtaContent';
import { getPage } from '@/lib/actions';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('get-involved');

  return generateDNAMetadata(page);
}

export default function GetInvolvedPage() {
  return <GetInvolvedCtaContent />;
}
