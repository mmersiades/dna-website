'use client';

import { SendEmailBody } from '@/app/api/send-email/route';
import Toast from '@/components/Toast';
import { paths } from '@/constants/paths';
import { toast } from 'react-toastify';

const sendEmailOnSubmit = async ({
  body,
  successTitle,
  successSubtitle,
  failureTitle,
  failureSubtitle,
  successCallback,
}: {
  body: SendEmailBody;
  successTitle: string;
  successSubtitle: string;
  failureTitle: string;
  failureSubtitle: string;
  successStatusCode?: number;
  successCallback?: () => void;
}) => {
  const response = await fetch(paths.api.sendEmail, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (response.status === 204) {
    toast(
      <Toast
        title={successTitle}
        message={successSubtitle}
      />,
      {
        ariaLabel: `${successTitle} ${successSubtitle}`,
        type: 'success',
      },
    );
    successCallback?.();
  } else {
    toast(
      <Toast
        title={failureTitle}
        message={failureSubtitle}
      />,
      {
        ariaLabel: `${failureTitle} ${failureSubtitle}`,
        type: 'error',
      },
    );
  }
};

export default sendEmailOnSubmit;
