'use client';
import { SendEmailBody } from '@/app/api/send-email/route';
import styles from '@/components/footer/styles';
import cn from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

type Inputs = z.infer<typeof schema>;

interface Props {
  id: string;
}

const ContactForm: FC<Props> = ({ id }) => {
  const defaultValues: Inputs = {
    email: '',
    name: '',
    message: '',
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
      from: 'mailer',
      to: ['dna-contact'],
      replyTo: data.email,
      subject: `Contact Form Submission from ${data.name}`,
      text: data.message,
    };

    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (response.status === 204) {
      toast.success("Message sent. Thank you. We'll reply via email soon");
      reset();
    } else {
      toast.error('Failed to send. Please try again later.');
    }
  };

  const { title, divider, input, submitButton } = styles;

  const {
    container,
    label,
    col,
    row,
    error,
    grid,
    mobileSubmit,
    desktopSubmit,
  } = {
    container: 'mt-8 mb-2',
    label: 'indent-2 text-sm font-medium',
    col: 'flex flex-col gap-1',
    row: 'flex flex-row gap-4',
    error: 'text-red-300 h-6 indent-2 text-sm',
    grid: cn(['grid gap-2 xl:gap-4', 'grid-cols-1 sm:grid-cols-12']),
    mobileSubmit: 'block sm:hidden',
    desktopSubmit: 'hidden sm:block',
  };

  return (
    <div className={container}>
      <h4 className={title}>Contact</h4>
      <hr className={divider} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={grid}>
          <Controller
            control={control}
            name="name"
            render={({ field, formState: { errors } }) => {
              return (
                <div className={cn([col, 'col-span-12 sm:col-span-5'])}>
                  <label
                    htmlFor={id}
                    className={label}
                  >
                    Name
                  </label>
                  <div className={row}>
                    <input
                      className={cn(input, 'h-10 w-full')}
                      type="text"
                      id={id}
                      required
                      {...field}
                    />
                  </div>

                  <span className={error}>
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
                <div className={cn([col, 'col-span-12 sm:col-span-5'])}>
                  <label
                    htmlFor={'email'}
                    className={label}
                  >
                    Email
                  </label>
                  <div className={row}>
                    <input
                      className={cn(input, 'h-10 w-full')}
                      type="email"
                      id={'email'}
                      required
                      {...field}
                    />
                  </div>

                  <span className={error}>
                    {errors.email ? errors.email.message : ''}
                  </span>
                </div>
              );
            }}
          />
          <div className={cn([col, 'sm:col-span-2', 'pt-5', desktopSubmit])}>
            <button
              type="submit"
              className={cn([
                submitButton,
                isSubmitting ? 'cursor-wait opacity-50' : 'cursor-pointer',
                'w-full',
              ])}
            >
              Send
            </button>
          </div>
          <Controller
            control={control}
            name="message"
            render={({ field, formState: { errors } }) => {
              return (
                <div className={cn([col, 'col-span-12'])}>
                  <label
                    htmlFor={'message'}
                    className={label}
                  >
                    Message
                  </label>
                  <div className={row}>
                    <textarea
                      className={cn(input, 'w-full py-2 font-sans')}
                      id={'message'}
                      required
                      {...field}
                    />
                  </div>

                  <span className={error}>
                    {errors.message ? errors.message.message : ''}
                  </span>
                </div>
              );
            }}
          />

          <button
            type="submit"
            className={cn([
              submitButton,
              isSubmitting ? 'cursor-wait opacity-50' : 'cursor-pointer',
              mobileSubmit,
              'col-span-12',
            ])}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
