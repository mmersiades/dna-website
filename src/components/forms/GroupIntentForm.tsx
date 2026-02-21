'use client';
import SubmitButton from '@/components/buttons/SubmitButton';
import cn from '@/utils/cn';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  state: string;
  subregion: string;
  country: string;
};

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
  const { control, handleSubmit } = useForm<Inputs>({ defaultValues });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const { formContainer, label, input, container, submitButton } = {
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
    submitButton: cn(
      'text-lg font-bold text-primary-foreground',
      'h-10',
      'bg-primary-200 dark:bg-primary',
      'bg-radial from-primary-200 to-primary-400/75 dark:from-primary dark:to-primary-500/50',
      'border-2 border-primary-800 rounded-lg dark:border-0',
      'p-2',
      'relative',
      'before:content-[""] before:absolute before:rounded-lg before:opacity-0 before:inset-0',
      'before:bg-radial before:from-primary-100 before:to-primary-300',
      'dark:before:from-primary-200 dark:before:to-primary',
      'hover:before:opacity-100',
      'before:transition-opacity duration-250',
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
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </div>
  );
};

export default GroupInterestForm;
