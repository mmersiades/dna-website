import PageRichText from '@/components/pageBuilder/PageRichText';
import { pageStyles } from '@/components/styles';
import { PARTICIPANTS_AGREEMENT_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { FC } from 'react';

dayjs.extend(utc);

interface Props {
  data: PARTICIPANTS_AGREEMENT_QUERYResult;
}

const ParticipantsAgreementSection: FC<Props> = ({ data }) => {
  if (!data) return null;

  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  const { detailsRow, details } = {
    detailsRow: cn('flex flex-row items-center gap-4 justify-end'),
    details: 'text-xs',
  };
  const dateUTC = dayjs.utc(data._updatedAt);
  const updated = dateUTC.local().format('D MMMM, YYYY');
  return (
    <section className={sectionContainer}>
      <div className={detailsRow}>
        <p className={details}>{`Version ${data.version}`}</p>
        <p className={details}>{`Updated ${updated}`}</p>
      </div>
      <h4 className={pageTitle}>{data.title}</h4>
      <hr className={pageDivider} />
      <PageRichText value={data.content} />
    </section>
  );
};

export default ParticipantsAgreementSection;
