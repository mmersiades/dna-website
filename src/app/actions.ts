'use server';
import sheetsApi from '@/app/services/SheetsApi';
import { env } from '@/env';
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

export const updateCacheTag = async (tag: string) => {
  updateTag(tag);
};
