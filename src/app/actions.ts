'use server';
import sheetsApi from '@/app/services/SheetsApi';
import { env } from '@/env';
import { sanityFetch } from '@/sanity/lib/live';
import { PAGE_QUERY, PARTICIPANTS_AGREEMENT_QUERY } from '@/sanity/lib/queries';
import { PAGE_QUERYResult } from '@/sanity/types';
import { cacheLife, cacheTag, updateTag } from 'next/cache';

export const fetchGroupIntentData = async () => {
  'use cache';
  cacheLife('hours');
  cacheTag('group-intent');
  const data = await sheetsApi.getSheetData(
    env.GOOGLE_SHEETS_GROUP_INTENT_SHEET_ID,
    'Sheet1',
  );

  if (!data) {
    throw new Error('Failed to fetch group intent data');
  }

  return data;
};

export const fetchGroupIntentTableRows = async (params: {
  state: string | null;
  region: string | null;
  country: string | null;
}) => {
  const data = (await fetchGroupIntentData()) as string[][];
  const rows = sheetsApi.mapRawGroupIntentData(data);
  return sheetsApi.getGroupIntentTableRows({ ...params, data: rows });
};

export const fetchParticipantAgreementData = async () => {
  'use cache';
  cacheLife('hours');
  cacheTag('participant-agreement');
  const data = await sheetsApi.getSheetData(
    env.GOOGLE_SHEETS_PARTICIPANTS_AGREEMENT_SHEET_ID,
    'Sheet1',
  );

  if (!data) {
    throw new Error('Failed to fetch participant agreement data');
  }

  return data;
};

export const fetchParticipantAgreementByEmail = async ({
  email,
}: {
  email: string;
}) => {
  const data = await fetchParticipantAgreementData();
  const rows = sheetsApi.mapRawParticipantAgreementData(data);

  return sheetsApi.filterParticipantAgreements({
    email,
    rows,
  });
};

export const fetchSanityPage = async (
  slug: string,
): Promise<PAGE_QUERYResult> => {
  'use cache';
  cacheLife('hours');
  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug },
  });
  return data;
};

export const fetchSanityParticipantsAgreement = async () => {
  'use cache';
  cacheLife('hours');
  const { data } = await sanityFetch({
    query: PARTICIPANTS_AGREEMENT_QUERY,
  });
  return data;
};

export const updateCacheTag = async (tag: string) => {
  updateTag(tag);
};
