'use client';
import { EmailAlias, SendEmailBody } from '@/app/api/send-email/route';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

interface Props {
  subscribeTo: EmailAlias;
}

const MailingListForm: FC<Props> = ({ subscribeTo }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Access the current value from the event object
    setEmail(event.target.value);
  };
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body: SendEmailBody = {
      from: email,
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
    } else {
      toast.error('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        onChange={handleEmailChange}
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default MailingListForm;
