'use server';
import humantixApi from '@/app/services/HumantixApi';
import sheetsApi from '@/app/services/SheetsApi';
import { env } from '@/env';
import { sanityFetch } from '@/sanity/lib/live';
import {
  DEGROWTH_DESCRIPTIONS_QUERY,
  EXT_RESOURCES_QUERY,
  GROUPS_QUERY,
  ONLINE_GROUPS_QUERY,
  PAGE_QUERY,
  PARTICIPANTS_AGREEMENT_QUERY,
} from '@/sanity/lib/queries';
import { PAGE_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
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

export const fetchSanityDegrowthDescriptions = async () => {
  'use cache';
  cacheLife('hours');
  const { data } = await sanityFetch({
    query: DEGROWTH_DESCRIPTIONS_QUERY,
  });

  return [...data].sort(() => Math.random() - 0.5).slice(0, 15);
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

interface BackgroundImageProps {
  src: string;
  darkSrc: string;
  altText: string;
  position: string;
  flip: 'no-flip' | 'on-right' | 'on-left';
}

export const generateBackgroundImageProps =
  async (): Promise<BackgroundImageProps> => {
    const images: Omit<BackgroundImageProps, 'position'>[] = [
      {
        src: 'butterfly-stippled-coloured-light.svg',
        darkSrc: 'butterfly-stippled-coloured-dark.svg',
        altText: 'Hand-drawn butterfly background image',
        flip: 'on-right',
      },
      {
        src: 'flower-bees-stippled-coloured-light.svg',
        darkSrc: 'flower-bees-stippled-coloured-dark.svg',
        altText: 'Hand-drawn flower with bees background image',
        flip: 'no-flip',
      },
      {
        src: 'snails-stippled-coloured-light.svg',
        darkSrc: 'snails-stippled-coloured-dark.svg',
        altText: 'Hand-drawn snails background image',
        flip: 'on-left',
      },
    ];

    const imageRand = Math.floor(Math.random() * images.length);
    const image = images[imageRand];

    const horizontalPositionRand = Math.floor(Math.random() * 2);
    console.log(
      'generateBackgroundImageProps horizontalPositionRand',
      horizontalPositionRand,
    );
    let horizontalPosition = '';
    let flip = '';
    if (horizontalPositionRand === 0) {
      // Left
      horizontalPosition = '-left-1/6 lg:-left-1/9';
      if (image.flip === 'on-left') {
        flip = '-scale-x-100';
      }
    } else {
      // Right
      horizontalPosition = '-right-1/6 lg:-right-1/9';
      if (image.flip === 'on-right') {
        flip = '-scale-x-100';
      }
    }

    console.log(
      'generateBackgroundImageProps horizontalPosition',
      horizontalPosition,
    );
    console.log('generateBackgroundImageProps flip', flip);

    return {
      ...image,
      position: cn(horizontalPosition, 'top-0', flip),
    };
  };
