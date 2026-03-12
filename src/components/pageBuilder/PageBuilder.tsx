import PageGallery from '@/components/pageBuilder/PageGallery';
import PageRichText from '@/components/pageBuilder/PageRichText';
import PageVideo from '@/components/pageBuilder/PageVideo';
import { pageStyles } from '@/components/styles';
import { PAGE_QUERYResult } from '@/sanity/types';
import { FC } from 'react';

type PageBuilderProps = NonNullable<PAGE_QUERYResult>;

const PageBuilder: FC<PageBuilderProps> = ({ pageBuilder, title }) => {
  if (!pageBuilder) return null;

  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{title}</h4>
      <hr className={pageDivider} />
      {pageBuilder.map((content, index) => {
        switch (content._type) {
          case 'hero':
            return <div key={index}></div>;
          case 'video':
            return (
              <div key={index}>
                <PageVideo
                  {...content}
                  url={content.url ? content.url : undefined}
                  videoLabel={
                    content.videoLabel ? content.videoLabel : undefined
                  }
                />
              </div>
            );
          case 'richTextSection':
            if (!content.content) return null;
            return (
              <div key={index}>
                <PageRichText value={content.content} />
              </div>
            );
          case 'gallery':
            return (
              <div key={index}>
                <PageGallery {...content} />
              </div>
            );
          default:
            return null;
        }
      })}
    </section>
  );

  // TODO: add last updated
};

export default PageBuilder;
