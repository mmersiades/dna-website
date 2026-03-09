import QrCodeForm from '@/app/(main)/qr-codes/QrCodeForm';
import { pageStyles } from '@/components/styles';
import copy from '@/constants/copy';
import { FC } from 'react';

const QrCodeSection: FC = () => {
  const { qrCodes } = copy;
  const { pageTitle, pageDivider, sectionContainer } = pageStyles;

  return (
    <section className={sectionContainer}>
      <h4 className={pageTitle}>{qrCodes.title}</h4>
      <hr className={pageDivider} />
      <QrCodeForm />
    </section>
  );
};

export default QrCodeSection;
