import { env } from '@/env';
import logger from '@/utils/pino';
import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

const SUBSCRIBE_EMAIL_DNA = env.SUBSCRIBE_EMAIL_DNA;
const SMTP_USERNAME = env.SMTP_USERNAME;
const SMTP_PASSWORD = env.SMTP_PASSWORD;
const SMTP_SERVER = env.SMTP_SERVER;
const SMTP_PORT = env.SMTP_PORT;

export type EmailAlias = 'dna';

export interface SendEmailBody {
  from: string;
  to: EmailAlias[];
  subject?: string;
  text?: string;
  html?: string;
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
    from,
    to: aliases,
    subject = '',
    text = '',
    html = '',
  } = (await req.json()) as SendEmailBody;

  const to = [];

  for (const a of aliases) {
    switch (a) {
      case 'dna':
        to.push(SUBSCRIBE_EMAIL_DNA);
        break;
      default:
        return new Response(null, {
          status: 400,
          statusText: 'Invalid email alias',
        });
    }
  }

  await transporter.verify();

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
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
