import PageGallery from '@/components/pageBuilder/PageGallery';
import PageRichText from '@/components/pageBuilder/PageRichText';
import PageVideo from '@/components/pageBuilder/PageVideo';
import { PAGE_QUERYResult } from '@/sanity/types';
import { FC } from 'react';

type PageBuilderProps = NonNullable<PAGE_QUERYResult>;

const PageBuilder: FC<PageBuilderProps> = ({ pageBuilder }) => {
  if (!pageBuilder) return null;
  // TODO: add title
  return (
    <div className={'container mr-auto ml-auto'}>
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
    </div>
  );

  // TODO: add last updated
};

export default PageBuilder;
