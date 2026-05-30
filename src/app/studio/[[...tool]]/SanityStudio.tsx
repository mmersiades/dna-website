import { connection } from 'next/server';
import StudioClient from './StudioClient';

export default async function SanityStudio() {
  await connection();
  return <StudioClient />;
}
