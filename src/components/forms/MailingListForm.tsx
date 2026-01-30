'use client';
import { EmailAlias, SendEmailBody } from '@/app/api/send-email/route';
import styles from '@/components/footer/styles';
import cn from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

const schema = z.object({
  email: z.email({ message: 'Invalid email address' }),
});

type Inputs = z.infer<typeof schema>;

interface Props {
  subscribeTo: EmailAlias;
  id?: string;
}

const MailingListForm: FC<Props> = ({ subscribeTo, id }) => {
  const defaultValues: Inputs = {
    email: '',
  };
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<Inputs>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const body: SendEmailBody = {
      from: data.email,
      to: [subscribeTo],
    };

    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (response.status === 204) {
      toast.success(
        'Thank you for subscribing! Check your email for the confirmation step.',
      );
      reset();
    } else {
      toast.error('Failed to subscribe. Please try again later.');
    }
  };

  const { title, divider, submitButton, input } = styles;

  const { container, label, col, row, error } = {
    container: 'mt-8 mb-2',
    label: 'indent-2 text-sm font-medium',
    col: 'flex flex-col gap-1',
    row: 'flex flex-row gap-2 md:gap-4 flex-wrap items-center',
    error: 'text-red-300 h-6 indent-2 text-sm',
  };

  return (
    <div className={container}>
      <h4 className={title}>Mailing List</h4>
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
                  Email
                </label>
                <div className={row}>
                  <div className={cn(col, 'flex-1')}>
                    <input
                      className={cn(input, 'h-10')}
                      type="email"
                      id={id}
                      required
                      {...field}
                    />
                  </div>
                  <button
                    type="submit"
                    className={cn([
                      submitButton,
                      isSubmitting
                        ? 'cursor-wait opacity-50'
                        : 'cursor-pointer',
                      'w-full sm:w-fit',
                    ])}
                  >
                    Subscribe
                  </button>
                </div>

                <span className={error}>
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
