'use client';
import { updateCacheTag } from '@/app/actions';
import { WriteGroupIntentRowBody } from '@/app/api/google/sheets/group-intent/route';
import { SendEmailBody } from '@/app/api/send-email/route';
import SubmitButton from '@/components/buttons/SubmitButton';
import Toast from '@/components/Toast';
import copy from '@/constants/copy';
import { paths } from '@/constants/paths';
import cn from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.email({ message: 'Invalid email address' }),
  state: z.string(),
  subregion: z.string(),
  country: z.string(),
});

type Inputs = z.infer<typeof schema>;

interface Props {
  state: string;
  subregion: string;
  country: string;
  onSuccess: (args: {
    state: string;
    region: string;
    country: string;
  }) => Promise<void>;
}

const GroupInterestForm: FC<Props> = ({
  state,
  country,
  subregion,
  onSuccess,
}) => {
  const defaultValues = {
    name: '',
    email: '',
    state,
    subregion,
    country,
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
    setValue,
  } = useForm<Inputs>({ defaultValues, resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { success, failure } = copy.local.intent;
    const body: WriteGroupIntentRowBody = {
      ...data,
      date: dayjs().format('YYYY-MM-DD'),
    };

    const response = await fetch(paths.api.google.sheets.groupIntent, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    if (response.ok) {
      await updateCacheTag('group-intent');
      await onSuccess({
        state: data.state,
        region: data.subregion,
        country: data.country,
      });
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

      reset();

      // Send email to notify DNA admins
      const emailBody: SendEmailBody = {
        from: 'mailer',
        to: ['dna-contact'],
        subject: `Group Intent Form Submission from ${data.name}`,
        text: `${data.name} | ${data.email} | ${data.state} | ${data.subregion} | ${data.country}`,
      };

      void fetch(paths.api.sendEmail, {
        method: 'POST',
        body: JSON.stringify(emailBody),
      });
    } else {
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

  useEffect(() => {
    setValue('state', state);
  }, [state, setValue]);

  useEffect(() => {
    setValue('subregion', subregion);
  }, [subregion, setValue]);

  useEffect(() => {
    setValue('country', country);
  }, [country, setValue]);

  const { formContainer, label, input, container } = {
    container: 'py-2 md:py-4',
    formContainer: cn(
      'flex flex-row gap-2 justify-start py-2 md:py-4 items-end',
    ),
    label: 'indent-2 text-sm font-medium',
    input: cn(
      'border-1 border-tertiary-500 rounded-lg',
      'focus:outline-primary focus:outline-1 focus:border-primary focus:outline-offset-0',
      'px-2',
      'text-lg font-bold',
      'h-full',
    ),
  };

  return (
    <div className={container}>
      <p className={'text-md'}>{copy.local.intent.title}</p>
      <form
        className={formContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <div className={'flex flex-col'}>
              <label
                htmlFor={'name'}
                className={label}
              >
                {copy.local.intent.name}
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
            <div className={'flex flex-col'}>
              <label
                htmlFor={'email'}
                className={label}
              >
                {copy.local.intent.email}
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
        <SubmitButton
          type="submit"
          submitting={isSubmitting}
          disabled={!isValid}
        >
          {copy.local.intent.submit}
        </SubmitButton>
      </form>
    </div>
  );
};

export default GroupInterestForm;
