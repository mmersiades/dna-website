import PageRichText from '@/components/pageBuilder/PageRichText';
import { pageStyles } from '@/components/styles';
import { BlockContent } from '@/sanity/types';
import cn from '@/utils/cn';

export default async function ParticipantsAgreementViewSkeleton() {
  const { pageTitle, pageDivider, proseSectionContainer } = pageStyles;

  const { detailsRow, text } = {
    detailsRow: cn('flex flex-row items-center gap-4 justify-start mb-8 px-2'),
    text: 'h-6 w-24 bg-muted/50',
  };

  const blockText: BlockContent = [
    {
      _key: 'ec814fb49376',
      _type: 'block',
      children: [
        {
          _key: '4b37e17cdbaf',
          _type: 'span',
          marks: [],
          text: 'We meet on the lands of First Nations peoples and acknowledge sovereignty over these lands were never ceded. We acknowledge the centuries of resistance that indigenous people have led against unsustainable and inhumane practices of capitalist colonisation. We learn from indigenous knowledge systems that have embodied many of the degrowth values for countless generations.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ];

  return (
    <section className={proseSectionContainer}>
      <div className={detailsRow}>
        <div className={text} />
        <div className={text} />
      </div>
      <h4 className={pageTitle}>{`Participants' Agreement`}</h4>
      <hr className={pageDivider} />
      <div className={'opacity-0'}>
        <PageRichText value={blockText} />
      </div>
    </section>
  );
}
