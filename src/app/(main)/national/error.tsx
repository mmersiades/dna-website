'use client';

import Error from '@/components/error/Error';

export default function PageError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className={'flex h-[calc(100svh-var(--header-height))]'}>
      <Error error={error} />
    </div>
  );
}
