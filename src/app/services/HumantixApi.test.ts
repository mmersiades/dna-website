import HumantixApi, {
  HumantixPaginatedEventResponse,
} from '@/app/services/HumantixApi';
import TestFixtures from '@/utils/TestFixtures';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest';

const baseApiUrl = 'https://api.humanitix.com';

const eventsResponse: HumantixPaginatedEventResponse & { status: number } = {
  status: 200,
  total: 1,
  pageSize: 5,
  page: 1,
  events: [TestFixtures.event],
};

export const restHandlers = [
  http.get(
    `${baseApiUrl}/v1/events?page=1&pageSize=5&inFutureOnly=true`,
    () => {
      return HttpResponse.json(eventsResponse);
    },
  ),
  http.get(
    `${baseApiUrl}/v1/events?page=1&pageSize=5&inFutureOnly=false`,
    () => {
      return HttpResponse.json(eventsResponse);
    },
  ),
];

const server = setupServer(...restHandlers);

describe('HumantixApi', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  describe('when fetching future events', () => {
    test('it should return future events', async () => {
      const result = await HumantixApi.fetchFutureEvents();
      expect(result).toEqual(eventsResponse);
    });
  });

  describe('when fetching past events', () => {
    test('it should return past events', async () => {
      const result = await HumantixApi.fetchPastEvents({});
      expect(result).toEqual(eventsResponse.events);
    });
  });
});
