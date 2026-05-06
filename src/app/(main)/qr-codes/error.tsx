'use client';

import ErrorComponent from '../../../components/error/ErrorComponent';

export default function PageError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className={'flex h-[calc(100svh-var(--header-height))]'}>
      <ErrorComponent error={error} />
    </div>
  );
}
