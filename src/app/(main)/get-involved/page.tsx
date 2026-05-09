import GetInvolvedCtaContent from '@/app/(main)/get-involved/GetInvolvedCtaContent';
import { fetchSanityPage } from '@/app/actions';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';
import { preload } from 'react-dom';

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchSanityPage('get-involved');

  return generateDNAMetadata(page);
}

export default function GetInvolvedPage() {
  preload('/flower-stippled-coloured-no-outline-light.svg', { as: 'image' });
  preload('/flower-stippled-coloured-no-outline-dark.svg', { as: 'image' });
  return <GetInvolvedCtaContent />;
}
