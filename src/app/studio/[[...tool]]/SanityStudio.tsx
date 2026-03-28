import { NextStudio } from 'next-sanity/studio';
import { connection } from 'next/server';
import config from '../../../../sanity.config';

export default async function SanityStudio() {
  await connection();
  return <NextStudio config={config} />;
}
