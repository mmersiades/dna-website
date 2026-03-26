'use server';
import humantixApi from '@/app/services/HumantixApi';
import sheetsApi from '@/app/services/SheetsApi';
import { env } from '@/env';
import { sanityFetch } from '@/sanity/lib/live';
import {
  EXT_RESOURCES_QUERY,
  GROUPS_QUERY,
  ONLINE_GROUPS_QUERY,
  PAGE_QUERY,
  PARTICIPANTS_AGREEMENT_QUERY,
} from '@/sanity/lib/queries';
import { PAGE_QUERYResult } from '@/sanity/types';
import dayjs from 'dayjs';
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

export const fetchSanityExternalResources = async () => {
  'use cache';
  cacheLife('hours');
  const { data } = await sanityFetch({
    query: EXT_RESOURCES_QUERY,
    stega: false,
  });
  return data;
};

export const fetchSanityNationalGroups = async () => {
  'use cache';
  cacheLife('hours');
  const { data } = await sanityFetch({
    query: ONLINE_GROUPS_QUERY,
    stega: false,
  });
  return data;
};

export const fetchSanityLocalGroups = async () => {
  'use cache';
  cacheLife('hours');
  const { data } = await sanityFetch({
    query: GROUPS_QUERY,
  });
  return data;
};

export const fetchHumantixPastEvents = async () => {
  'use cache';
  cacheLife('hours');
  const events = await humantixApi.fetchPastEvents({
    since: dayjs().subtract(1, 'year').toISOString(),
  });

  return events
    .filter((event) => event.published && event.public)
    .sort((a, b) => {
      if (a.endDate && b.endDate) {
        return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
      }
      return 0;
    });
};

export const fetchHumantixFutureEvents = async () => {
  'use cache';
  cacheLife('hours');
  const { events, status } = await humantixApi.fetchFutureEvents();
  if (status !== 200) {
    throw new Error('Failed to fetch future Humantix events');
  }

  return events
    .filter((event) => event.published && event.public)
    .sort((a, b) => {
      if (a.endDate && b.endDate) {
        return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
      }
      return 0;
    });
};

export const updateCacheTag = async (tag: string) => {
  updateTag(tag);
};
