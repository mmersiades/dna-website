// noinspection JSUnusedGlobalSymbols

'use client';

import { WallPaperImageProps } from '@/components/PageBackground';
import cn from '@/utils/cn';
import TestFixtures from '@/utils/TestFixtures';

export const fetchGroupIntentData = async () => {};

export const fetchGroupIntentTableRows = async (params: {
  state: string | null;
  region: string | null;
  country: string | null;
}) => {
  if (!params.state && !params.region && !params.country) {
    return TestFixtures.groupInterestData_Australia;
  }

  if (params.state && !params.region && !params.country) {
    return TestFixtures.groupInterestData_State(params.state);
  }

  if (params.state && params.region && !params.country) {
    return TestFixtures.groupInterestData_Region(params.state, params.region);
  }

  if (params.state && params.region && params.country) {
    return TestFixtures.groupInterestData_Country(
      params.state,
      params.region,
      params.country,
    );
  }

  return [];
};

export const fetchParticipantAgreementData = async () => {};

export const fetchParticipantAgreementByEmail = async ({
  email,
}: {
  email: string;
}) => {
  return [];
};

export const fetchSanityParticipantsAgreement = async () => {};

export const fetchSanityExternalResources = async () => {};

export const fetchSanityNationalGroups = async () => {
  return TestFixtures.nationalGroups;
};

export const fetchSanityLocalGroups = async () => {};

export const fetchSanityDegrowthDescriptions = async () => {};

export const fetchHumantixPastEvents = async () => {};

export const fetchHumantixFutureEvents = async () => {};

export const updateCacheTag = async (tag: string) => {
  // updateTag(tag);
};

interface BackgroundImageProps {
  src: string;
  darkSrc: string;
  altText: string;
  position: string;
  flip: 'no-flip' | 'on-right' | 'on-left';
  padding?: string;
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
        padding: 'p-8 sm:p-12',
      },
    ];

    const image = images[0];

    const horizontalPositionRand = 0;

    let horizontalPosition;
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

    return {
      ...image,
      position: cn(horizontalPosition, 'top-0', flip),
    };
  };

export const generateWallpaperImageProps = async (count: number) => {
  const images: Omit<WallPaperImageProps, 'index'>[] = [
    {
      src: '/flower-bees-stippled-light.svg',
      darkSrc: '/flower-bees-stippled-dark.svg',
    },
    {
      src: 'butterfly-stippled-page-light.svg',
      darkSrc: 'butterfly-stippled-page-dark.svg',
    },
    {
      src: '/snails-stippled-page-light.svg',
      darkSrc: '/snails-stippled-page-dark.svg',
      padding: 'p-[calc(100vw*0.2)] sm:p-24 md:p-28 lg:p-32',
      flip: 'on-left',
    },
    {
      src: '/ants-stippled-page-light.svg',
      darkSrc: '/ants-stippled-page-dark.svg',
      padding: 'p-[calc(100vw*0.2)] sm:p-24 md:p-42 lg:p-44 rotate-90',
    },
  ];

  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(images[0]);
  }

  return result;
};
