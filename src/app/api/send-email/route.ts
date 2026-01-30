import { env } from '@/env';
import logger from '@/utils/pino';
import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

const SUBSCRIBE_EMAIL_DNA = env.SUBSCRIBE_EMAIL_DNA;
const MAILER_EMAIL = env.MAILER_EMAIL;
const CONTACT_EMAIL = env.CONTACT_EMAIL;
const SMTP_USERNAME = env.SMTP_USERNAME;
const SMTP_PASSWORD = env.SMTP_PASSWORD;
const SMTP_SERVER = env.SMTP_SERVER;
const SMTP_PORT = env.SMTP_PORT;

export type EmailAlias = 'dna-mailing' | 'mailer' | 'dna-contact';

export interface SendEmailBody {
  from: string | EmailAlias;
  to: EmailAlias[];
  subject?: string;
  text?: string;
  html?: string;
  replyTo?: string;
}

const transporter = nodemailer.createTransport({
  host: SMTP_SERVER,
  port: parseInt(SMTP_PORT),
  secure: true,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const {
    from: fromAlias,
    to: aliases,
    subject = '',
    text = '',
    html = '',
    replyTo,
  } = (await req.json()) as SendEmailBody;

  const to = [];

  for (const a of aliases) {
    switch (a) {
      case 'dna-mailing':
        to.push(SUBSCRIBE_EMAIL_DNA);
        break;
      case 'dna-contact':
        to.push(CONTACT_EMAIL);
        break;
      default:
        return new Response(null, {
          status: 400,
          statusText: 'Invalid email alias',
        });
    }
  }

  let from;

  switch (fromAlias) {
    case 'dna':
      from = SUBSCRIBE_EMAIL_DNA;
      break;
    case 'mailer':
      from = MAILER_EMAIL;
      break;
    default:
      from = fromAlias;
  }

  await transporter.verify();

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      replyTo,
    });
    logger.info('Message sent: %s', info.messageId);
    return new Response(null, {
      status: 204,
    });
  } catch (err) {
    logger.error(err);
    return new Response(`${err}`, {
      status: 500,
    });
  }
}
