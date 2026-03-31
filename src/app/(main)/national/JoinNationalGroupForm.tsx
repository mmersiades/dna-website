'use client';

import { SendEmailBody } from '@/app/api/send-email/route';
import FooterSubmitButton from '@/components/buttons/FooterSubmitButton';
import styles from '@/components/footer/styles';
import copy from '@/constants/copy';
import { ONLINE_GROUPS_QUERYResult } from '@/sanity/types';
import cn from '@/utils/cn';
import sendEmailOnSubmit from '@/utils/sendEmailOnSubmit';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useEffect, useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.email({ message: 'Invalid email address' }),
  groupName: z.string().min(1, { message: 'Group is required' }),
});

type Inputs = z.infer<typeof schema>;

interface Props {
  selectedGroup: ONLINE_GROUPS_QUERYResult[0];
  onSubmit: () => void;
}

export const JoinNationalGroupForm: FC<Props> = ({
  selectedGroup,
  onSubmit: submitCallback,
}) => {
  const { instructions, success, failure } = copy.national.form;

  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const defaultValues: Inputs = {
    email: '',
    name: '',
    groupName: selectedGroup.title,
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
    const text = `Please help ${data.name} (${data.email}) attend the next ${data.groupName} meeting.`;

    const body: SendEmailBody = {
      from: 'mailer',
      to: ['dna-contact'],
      replyTo: data.email,
      subject: `Online group support request from ${data.name}`,
      text,
    };

    void sendEmailOnSubmit({
      body,
      successTitle: success.title,
      successSubtitle: success.subtitle,
      failureTitle: failure.title,
      failureSubtitle: failure.subtitle,
      successCallback: reset,
    });

    submitCallback();
  };

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const { input } = styles;

  const {
    container,
    h6,
    highlight,
    formContainer,
    label,
    col,
    error,
    submitContainer,
  } = {
    container: cn('text-background dark:text-foreground', 'max-w-200'),
    h6: 'font-display font-bold py-2 whitespace-pre-wrap text-lg ',
    highlight: 'font-bold text-primary',
    formContainer: cn('flex flex-row items-end gap-2 flex-wrap'),
    label: 'indent-2 text-sm font-medium',
    col: 'flex flex-col gap-1 flex-1',
    error: 'text-red-300 h-6 indent-2 text-sm',
    submitContainer: 'w-full sm:w-fit pb-7 pt-4',
  };

  return (
    <div className={container}>
      <h6 className={h6}>
        {instructions.a}
        <span className={highlight}>{selectedGroup.title}</span>
        {selectedGroup.category !== 'meeting' ? instructions.b : '.'}
      </h6>
      <form
        className={formContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="name"
          render={({ field, formState: { errors } }) => {
            return (
              <div className={col}>
                <label
                  htmlFor={'online-group-name'}
                  className={label}
                >
                  Name
                </label>
                <input
                  className={cn(input, 'h-10')}
                  type="text"
                  id={'online-group-name'}
                  required
                  aria-required="true"
                  {...field}
                  ref={(e) => {
                    field.ref(e);
                    nameInputRef.current = e;
                  }}
                />

                <span
                  className={error}
                  aria-describedby={'online-group-name'}
                >
                  {errors.name ? errors.name.message : ''}
                </span>
              </div>
            );
          }}
        />
        <Controller
          control={control}
          name="email"
          render={({ field, formState: { errors } }) => {
            return (
              <div className={col}>
                <label
                  htmlFor={'email'}
                  className={label}
                >
                  Email
                </label>
                <input
                  className={cn(input, 'h-10')}
                  type="email"
                  id={'email'}
                  required
                  aria-required="true"
                  {...field}
                />

                <span
                  className={error}
                  aria-describedby={'email'}
                >
                  {errors.email ? errors.email.message : ''}
                </span>
              </div>
            );
          }}
        />
        <div className={submitContainer}>
          <FooterSubmitButton
            type="submit"
            submitting={isSubmitting}
            disabled={!isValid}
          >
            Submit
          </FooterSubmitButton>
        </div>
      </form>
    </div>
  );
};

export default JoinNationalGroupForm;
