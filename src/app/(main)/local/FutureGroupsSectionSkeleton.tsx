import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import cn from '@/utils/cn';
import { FC } from 'react';

const FutureGroupsSectionSkeleton: FC = () => {
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;
  const { formContainer, input, table } = {
    formContainer: cn(
      'flex flex-row gap-2 justify-start flex-wrap py-2 md:py-4',
    ),
    input: 'bg-muted h-10 w-20 rounded-lg',
    table: 'bg-muted/50 h-25 w-full rounded-md',
  };

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>Future Groups</h4>
      <hr className={pageDivider} />
      <div className={'p-2'}>
        <p className={'text-md'}>{copy.local.interest.title}</p>
        <div className={formContainer}>
          <div className={input} />
          <div className={input} />
          <div className={input} />
        </div>
        <div className={table} />
      </div>
    </section>
  );
};

export default FutureGroupsSectionSkeleton;
