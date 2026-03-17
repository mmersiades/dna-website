import PastEventListItem from '@/app/(main)/events/PastEventListItem';
import { HumantixEvent } from '@/app/services/HumantixApi';
import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { FC } from 'react';

interface Props {
  events: HumantixEvent[];
}

const PastEventList: FC<Props> = ({ events }) => {
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;
  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{copy.events.previous}</h4>
      <hr className={pageDivider} />
      <div className="flex flex-col gap-2 p-2">
        {events.map((e) => (
          <PastEventListItem
            key={e._id}
            event={e}
          />
        ))}
      </div>
    </section>
  );
};

export default PastEventList;
