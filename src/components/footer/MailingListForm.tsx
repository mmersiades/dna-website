'use client';
import { SendEmailBody } from '@/app/api/send-email/route';
import FooterSubmitButton from '@/components/buttons/FooterSubmitButton';
import styles from '@/components/footer/styles';
import copy from '@/constants/copy';
import testIds from '@/constants/testIds';
import cn from '@/utils/cn';
import sendEmailOnSubmit from '@/utils/sendEmailOnSubmit';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
  email: z.email({ message: 'Invalid email address' }),
});

type Inputs = z.infer<typeof schema>;

interface Props {
  id?: string;
}

const MailingListForm: FC<Props> = ({ id }) => {
  const {
    title: mailingListTitle,
    label: mailingListLabel,
    button: mailingListButton,
    success,
    failure,
  } = copy.footer.mailingList;

  const { mailingList } = testIds.footer;

  const defaultValues: Inputs = {
    email: '',
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm<Inputs>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const body: SendEmailBody = {
      from: 'mailer',
      to: ['dna-contact'],
      subject: `DNA mailing list subscription request`,
      text: `Email: ${data.email}`,
    };

    void sendEmailOnSubmit({
      body,
      successTitle: success.title,
      successSubtitle: success.message,
      failureTitle: failure.title,
      failureSubtitle: failure.message,
      successCallback: reset,
    });
  };

  const { title, divider, input } = styles;

  const { container, label, col, row, error, submitContainer } = {
    container: 'mt-8 mb-2',
    label: 'indent-2 text-sm font-medium',
    col: 'flex flex-col gap-1',
    row: 'flex flex-row gap-2 xl:gap-4 flex-wrap items-center',
    error: 'text-red-300 h-6 indent-2 text-sm',
    submitContainer: 'w-full sm:w-fit',
  };

  return (
    <div className={container}>
      <h4 className={title}>{mailingListTitle}</h4>
      <hr className={divider} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field, formState: { errors } }) => {
            return (
              <div className={col}>
                <label
                  htmlFor={id}
                  className={label}
                >
                  {mailingListLabel}
                </label>
                <div className={row}>
                  <div className={cn(col, 'flex-1')}>
                    <input
                      data-testid={mailingList.emailInput}
                      className={cn(input, 'h-10')}
                      type="email-to-subscribe"
                      id={id}
                      required
                      aria-required="true"
                      {...field}
                    />
                  </div>
                  <div className={submitContainer}>
                    <FooterSubmitButton
                      data-testid={mailingList.submitButton}
                      type="submit"
                      submitting={isSubmitting}
                      disabled={!isValid}
                    >
                      {mailingListButton}
                    </FooterSubmitButton>
                  </div>
                </div>

                <span
                  className={error}
                  aria-describedby={'email-to-subscribe'}
                >
                  {errors.email ? errors.email.message : ''}
                </span>
              </div>
            );
          }}
        />
      </form>
    </div>
  );
};

export default MailingListForm;
