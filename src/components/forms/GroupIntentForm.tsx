'use client';
import { WriteGroupIntentRowBody } from '@/app/api/google/sheets/group-intent/route';
import { SendEmailBody } from '@/app/api/send-email/route';
import SubmitButton from '@/components/buttons/SubmitButton';
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
}

const GroupInterestForm: FC<Props> = ({ state, country, subregion }) => {
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
    const body: WriteGroupIntentRowBody = {
      ...data,
      date: dayjs().format('YYYY-MM-DD'),
    };

    const response = await fetch('/api/google/sheets/group-intent', {
      method: 'POST',
      body: JSON.stringify(body),
    });

    if (response.ok) {
      toast.success(
        'Thanks. Your interest in joining a group has been registered',
      );
      reset();

      // Send email to notify DNA admins
      const emailBody: SendEmailBody = {
        from: 'mailer',
        to: ['dna-contact'],
        subject: `Group Intent Form Submission from ${data.name}`,
        text: `${data.email} | ${data.state} | ${data.subregion} | ${data.country}`,
      };

      await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify(emailBody),
      });
    } else {
      toast.error('Failed to register interest. Please try again later.');
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
      'focus:outline-primary focus:outline-1 focus:border-primary',
      'px-2',
      'text-lg font-bold',
      'h-full',
    ),
  };

  return (
    <div className={container}>
      <p className={'text-md'}>
        Register your interest in joining a new group in your area.
      </p>
      <form
        className={formContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="name"
          render={({ field, formState: { errors } }) => (
            <div className={'flex flex-col'}>
              <label
                htmlFor={'name'}
                className={label}
              >
                Name
              </label>
              <input
                {...field}
                className={cn(input, 'h-10 w-full')}
                type={'text'}
              />
              {errors.email && <span>This field is required</span>}
            </div>
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field, formState: { errors } }) => (
            <div className={'flex flex-col'}>
              <label
                htmlFor={'email'}
                className={label}
              >
                Email
              </label>
              <input
                className={cn(input, 'h-10 w-full')}
                {...field}
              />
              {errors.email && <span>This field is required</span>}
            </div>
          )}
        />
        <SubmitButton
          type="submit"
          submitting={isSubmitting}
          disabled={!isValid}
        >
          Submit
        </SubmitButton>
      </form>
    </div>
  );
};

export default GroupInterestForm;
