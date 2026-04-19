import PageBackground from '@/components/PageBackground';
import { pageStyles } from '@/components/styles';
import cn from '@/utils/cn';
import { FC } from 'react';

const PageBuilderSkeleton: FC<{ title: string }> = ({ title }) => {
  const { pageTitle, pageDivider, proseSectionContainer } = pageStyles;

  return (
    <div className={'relative'}>
      <PageBackground
        imageCount={3}
        additionalClasses={'border border-black'}
      />
      <section className={cn(proseSectionContainer, 'relative', 'w-full')}>
        <h4 className={pageTitle}>{title}</h4>
        <hr className={pageDivider} />
        <div className={'border-primary h-200 w-full border-2'} />
      </section>
    </div>
  );
};

export default PageBuilderSkeleton;
