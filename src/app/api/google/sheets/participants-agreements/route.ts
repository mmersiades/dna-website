import { env } from '@/env';
import { checkBotId } from 'botid/server';
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export interface WriteParticipantsAgreementRowBody {
  name: string;
  email: string;
  agreementVersion: number;
  date: string;
}

export async function POST(request: Request) {
  const verification = await checkBotId();

  if (verification.isBot) {
    return NextResponse.json({ error: 'Access denied' }, { status: 403 });
  }

  try {
    const body = await request.json();
    const row = [body.date, body.name, body.email, body.agreementVersion];

    const auth = new google.auth.JWT({
      email: env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: env.GOOGLE_SHEETS_PARTICIPANTS_AGREEMENT_SHEET_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Google Sheets Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to write to sheet' },
      { status: 500 },
    );
  }
}
