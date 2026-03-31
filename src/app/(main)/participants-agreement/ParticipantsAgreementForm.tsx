'use client';
import {
  fetchParticipantAgreementByEmail,
  updateCacheTag,
} from '@/app/actions';
import { WriteParticipantsAgreementRowBody } from '@/app/api/google/sheets/participants-agreements/route';
import { SendEmailBody } from '@/app/api/send-email/route';
import SubmitButton from '@/components/buttons/SubmitButton';
import Toast from '@/components/Toast';
import copy from '@/constants/copy';
import { paths } from '@/constants/paths';
import cn from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.email({ message: 'Invalid email address' }),
  agreementVersion: z.number().min(1, { message: 'Invalid agreement version' }),
  agree: z
    .boolean()
    .refine((value) => value, { message: 'Agreement must be accepted' }),
});

type Inputs = z.infer<typeof schema>;

interface Props {
  agreementVersion: number;
}

const ParticipantsAgreementForm: FC<Props> = ({ agreementVersion }) => {
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    name: '',
    email: '',
    agreementVersion,
    agree: false,
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm<Inputs>({ defaultValues, resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const { success, failure, existing } = copy.participantsAgreement.form;

    // Check for existing agreement
    const existingAgreements = await fetchParticipantAgreementByEmail({
      email: data.email,
    });

    const matchingAgreements = existingAgreements.filter(
      (agreement) => agreement.agreementVersion === data.agreementVersion,
    );

    if (matchingAgreements.length > 0) {
      const message = existing.message(data.email, data.agreementVersion);
      setLoading(false);
      toast(
        <Toast
          title={existing.title}
          message={message}
        />,
        {
          ariaLabel: `${existing.title} ${message}`,
          type: 'info',
        },
      );
      return;
    }

    // Post to participants-agreements Google Sheet
    const body: WriteParticipantsAgreementRowBody = {
      ...data,
      date: dayjs().format('YYYY-MM-DD'),
    };

    const response = await fetch(
      paths.api.google.sheets.participantsAgreement,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
    );

    if (response.ok) {
      await updateCacheTag('participant-agreement');
      toast(
        <Toast
          title={success.title}
          message={success.message}
        />,
        {
          ariaLabel: `${success.title} ${success.message}`,
          type: 'success',
        },
      );
      setLoading(false);

      reset();

      // Send email to notify DNA admins
      const emailBody: SendEmailBody = {
        from: 'mailer',
        to: ['dna-contact'],
        subject: `Participation Agreement Submission from ${data.name}`,
        text: `${data.name} | ${data.email} | Version: ${data.agreementVersion}`,
      };

      void fetch(paths.api.sendEmail, {
        method: 'POST',
        body: JSON.stringify(emailBody),
      });
    } else {
      setLoading(false);
      toast(
        <Toast
          title={failure.title}
          message={failure.message}
        />,
        {
          ariaLabel: `${failure.title} ${failure.message}`,
          type: 'error',
        },
      );
    }
  };

  const { form } = copy.participantsAgreement;

  const {
    container,
    formContainer,
    label,
    input,
    checkbox,
    checkboxIcon,
    checkboxContainer,
    inputContainer,
    submitContainer,
  } = {
    container: 'py-2 md:py-4 px-2 max-w-[1000px] mr-auto ml-auto',
    formContainer: cn('grid grid-cols-12 gap-2 md:gap-4'),
    label: 'indent-2 text-sm font-medium',
    input: cn(
      'border-1 border-tertiary-500 rounded-lg',
      'focus:outline-primary focus:outline-1 focus:border-primary focus:outline-offset-0',
      'hover:border-primary',
      'px-2',
      'text-lg font-bold',
      'h-full',
    ),
    checkbox: cn(
      'peer relative appearance-none',
      'border border-tertiary-500 hover:border-primary rounded-lg checked:border-0',
      'checked:bg-primary',
      'h-10 w-10',
      'shrink-0',
      'cursor-pointer',
    ),
    checkboxIcon: cn(
      'icon-[lucide--check]',
      'pointer-events-none',
      'absolute',
      'hidden peer-checked:block',
      'm-2',
      'h-6 w-6',
      'text-black',
    ),
    checkboxContainer: cn(
      'flex flex-row items-center gap-2',
      'col-span-12 sm:col-span-10',
    ),
    inputContainer: cn('flex flex-col', 'col-span-12 sm:col-span-6', '', ''),
    submitContainer: cn('flex justify-end', 'col-span-12 sm:col-span-2 '),
  };

  return (
    <div className={container}>
      <form
        className={formContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <div className={inputContainer}>
              <label
                htmlFor={'name'}
                className={label}
              >
                {form.name.label}
              </label>
              <input
                {...field}
                className={cn(input, 'h-10 w-full')}
                aria-required="true"
                required
                type={'text'}
              />
            </div>
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <div className={inputContainer}>
              <label
                htmlFor={'email'}
                className={label}
              >
                {form.email.label}
              </label>
              <input
                className={cn(input, 'h-10 w-full')}
                aria-required="true"
                required
                {...field}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="agree"
          render={({ field: { value, ...field } }) => (
            <div className={checkboxContainer}>
              <input
                type={'checkbox'}
                id={'agree'}
                checked={value}
                {...field}
                className={checkbox}
                aria-required="true"
                required
              />
              <label
                htmlFor={'agree'}
                className={cn(label, 'cursor-pointer', 'indent-0')}
              >
                {form.agreement.label}
              </label>
              <span className={checkboxIcon} />
            </div>
          )}
        />
        <div className={submitContainer}>
          <SubmitButton
            type="submit"
            submitting={isSubmitting}
            disabled={!isValid || loading}
          >
            {form.submit}
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default ParticipantsAgreementForm;
