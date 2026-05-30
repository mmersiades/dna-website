'use client';
import { NextStudio } from 'next-sanity/studio';

import { FC } from 'react';
import config from '../../../../sanity.config';

const SanityClient: FC = () => <NextStudio config={config} />;

export default SanityClient;
