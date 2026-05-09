import {
  default as SheetsApi,
  default as sheetsApi,
} from '@/app/services/SheetsApi';
import TestFixtures from '@/utils/TestFixtures';
import { http, HttpHandler, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest';

const mockGroupIntentSheetId = 'mock-group-intent-sheet-id';
const mockParticipantsAgreementSheetId = 'mock-participants-agreement-sheet-id';

export const restHandlers: HttpHandler[] = [
  http.post('https://oauth2.googleapis.com/token', () => {
    return HttpResponse.json('mock-jwt-token');
  }),
  http.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${mockGroupIntentSheetId}/values/Sheet1`,
    () => {
      return HttpResponse.json(TestFixtures.groupIntentSheetsResponse.data);
    },
  ),
  http.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${mockParticipantsAgreementSheetId}/values/Sheet1`,
    () => {
      return HttpResponse.json(
        TestFixtures.participantsAgreementGoogleSheetsResponse.data,
      );
    },
  ),
];

const server = setupServer(...restHandlers);

describe('SheetsApi', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  describe('when fetching participant agreement data by email', () => {
    describe('when user has NOT already signed agreement', () => {
      test('it should return no matching participant agreement rows', async () => {
        const data = await SheetsApi.getSheetData(
          mockParticipantsAgreementSheetId,
          'Sheet1',
        );
        expect(data).toBeDefined();
        if (data) {
          expect(data).toEqual(
            TestFixtures.participantsAgreementGoogleSheetsResponse.data.values,
          );
        }
        const rows = sheetsApi.mapRawParticipantAgreementData(data);

        const result = sheetsApi.filterParticipantAgreements({
          email: 'no.match@email.com',
          rows,
        });
        expect(result).toHaveLength(0);
      });
    });
    describe('when user has already signed agreement', () => {
      test('it should return matching participant agreement rows', async () => {
        const data = await SheetsApi.getSheetData(
          mockParticipantsAgreementSheetId,
          'Sheet1',
        );
        expect(data).toBeDefined();
        if (data) {
          expect(data).toEqual(
            TestFixtures.participantsAgreementGoogleSheetsResponse.data.values,
          );
        }
        const rows = sheetsApi.mapRawParticipantAgreementData(data);

        const userEmail =
          TestFixtures.participantsAgreementGoogleSheetsResponse.data
            .values[1][2];

        const result = sheetsApi.filterParticipantAgreements({
          email: userEmail,
          rows,
        });
        expect(result).toHaveLength(1);
        expect(result[0].email).toEqual(userEmail);
      });
    });
  });

  describe('when fetching group intent table rows', () => {
    describe('when fetching with no params', () => {
      test('it should return results for Australia', async () => {
        const data = await SheetsApi.getSheetData(
          mockGroupIntentSheetId,
          'Sheet1',
        );
        expect(data).toBeDefined();
        if (data) {
          expect(data).toEqual(
            TestFixtures.groupIntentSheetsResponse.data.values,
          );
          const rows = sheetsApi.mapRawGroupIntentData(data);
          const result = sheetsApi.getGroupIntentTableRows({
            data: rows,
            state: null,
            region: null,
            country: null,
          });
          expect(result).toEqual([
            { label: 'Australia', count: 27, bold: true },
          ]);
        }
      });
    });
    describe('when fetching for state', () => {
      test('it should return results for given state', async () => {
        const data = await SheetsApi.getSheetData(
          mockGroupIntentSheetId,
          'Sheet1',
        );
        expect(data).toBeDefined();
        if (data) {
          expect(data).toEqual(
            TestFixtures.groupIntentSheetsResponse.data.values,
          );
          const rows = sheetsApi.mapRawGroupIntentData(data);
          const result = sheetsApi.getGroupIntentTableRows({
            data: rows,
            state: 'QLD',
            region: null,
            country: null,
          });

          expect(result).toEqual([{ label: 'QLD', count: 7, bold: true }]);
        }
      });
    });
    describe('when fetching for subregion', () => {
      test('it should return results for given subregion', async () => {
        const data = await SheetsApi.getSheetData(
          mockGroupIntentSheetId,
          'Sheet1',
        );
        expect(data).toBeDefined();
        if (data) {
          expect(data).toEqual(
            TestFixtures.groupIntentSheetsResponse.data.values,
          );
          const rows = sheetsApi.mapRawGroupIntentData(data);
          const result = sheetsApi.getGroupIntentTableRows({
            data: rows,
            state: 'QLD',
            region: 'Brisbane - East',
            country: null,
          });

          expect(result).toEqual([
            { label: 'Brisbane - North', count: 1, bold: false },
            { label: 'Brisbane - South', count: 0, bold: false },
            { label: 'Brisbane - West', count: 2, bold: false },
            { label: 'Brisbane Inner City', count: 1, bold: false },
            { label: 'Brisbane - East', count: 0, bold: true },
            { label: 'QLD', count: 7, bold: true },
          ]);
        }
      });
    });

    describe('when fetching for Country', () => {
      test('it should return results for given Country', async () => {
        const data = await SheetsApi.getSheetData(
          mockGroupIntentSheetId,
          'Sheet1',
        );
        expect(data).toBeDefined();
        if (data) {
          expect(data).toEqual(
            TestFixtures.groupIntentSheetsResponse.data.values,
          );
          const rows = sheetsApi.mapRawGroupIntentData(data);
          const result = sheetsApi.getGroupIntentTableRows({
            data: rows,
            state: 'QLD',
            region: 'Brisbane - East',
            country: 'Yuggera',
          });

          expect(result).toEqual([
            { label: 'Brisbane - North', count: 1, bold: false },
            { label: 'Brisbane - South', count: 0, bold: false },
            { label: 'Brisbane - West', count: 2, bold: false },
            { label: 'Brisbane Inner City', count: 1, bold: false },
            { label: 'Brisbane - East', count: 0, bold: true },
            { label: 'QLD', count: 7, bold: true },
            { label: 'Yuggera', count: 0, bold: true },
          ]);
        }
      });
    });
  });
});
