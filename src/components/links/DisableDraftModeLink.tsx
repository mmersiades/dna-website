'use client';

import { useDraftModeEnvironment } from 'next-sanity/hooks';
import { FC } from 'react';

const DisableDraftMode: FC = () => {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== 'live' && environment !== 'unknown') {
    return null;
  }

  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed right-4 bottom-4 bg-gray-50 px-4 py-2"
    >
      Disable Draft Mode
    </a>
  );
};

export default DisableDraftMode;
