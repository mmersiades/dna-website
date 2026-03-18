import { env } from '@/env';
import dayjs from 'dayjs';
import { z } from 'zod';

export const humantixTicketTypeSchema = z.object({
  _id: z.string(),
  name: z.string(),
  price: z.number().optional(),
  priceRange: z
    .object({
      enabled: z.boolean(),
      min: z.number().optional(),
      max: z.number().optional(),
    })
    .optional(),
  priceOptions: z
    .object({
      enabled: z.boolean(),
      options: z.array(z.object({ value: z.string() })),
    })
    .optional(),
  quantity: z.number().int().optional(),
  description: z.string().optional(),
  disabled: z.boolean().optional(),
  deleted: z.boolean().optional(),
  isDonation: z.boolean().optional(),
});

export type HumantixTicketType = z.infer<typeof humantixTicketTypeSchema>;

export const humantixPackagedTicketSchema = z.object({
  _id: z.string(),
  name: z.string().optional(),
  price: z.number().optional(),
  quantity: z.number().int().optional(),
  description: z.string().optional(),
  disabled: z.boolean().optional(),
  deleted: z.boolean().optional(),
  tickets: z
    .array(
      z.object({
        ticketTypeId: z.string(),
        quantity: z.number().int(),
      }),
    )
    .optional(),
});

export type HumantixPackagedTicket = z.infer<
  typeof humantixPackagedTicketSchema
>;

export const humantixEventDateSchema = z.object({
  _id: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  scheduleId: z.string().optional(),
  disabled: z.boolean().optional(),
  deleted: z.boolean().optional(),
});

export type HumantixEventDate = z.infer<typeof humantixEventDateSchema>;

export const humantixEventDatesSchema = z.array(humantixEventDateSchema);

export type HumantixEventDates = z.infer<typeof humantixEventDatesSchema>;

export const humantixEventLocationSchema = z.object({
  type: z.enum(['address', 'online', 'custom', 'toBeAnnounced']),
  venueName: z.string().optional(),
  address: z.string().optional(),
  latLng: z.array(z.number()).optional(),
  instructions: z.string().optional(),
  placeId: z.string().optional(),
  onlineUrl: z.string().optional(),
  mapUrl: z.string().optional(),
  city: z.string().optional(),
  region: z.string().optional(),
  country: z.string().optional(),
});

export type HumantixEventLocation = z.infer<typeof humantixEventLocationSchema>;

export const humantixEventSchema = z.object({
  _id: z.string(),
  userId: z.string(),
  organiserId: z.string().optional(),
  currency: z.enum(['AUD', 'NZD', 'USD', 'FJD', 'CAD']),
  name: z.string(),
  description: z.string(),
  sharingDescription: z.string().optional(),
  slug: z.string(),
  url: z.string().optional(),
  tagIds: z.array(z.string()).optional(),
  category: z.string().optional(),
  classification: z
    .object({
      type: z
        .enum([
          'appearanceOrSigning',
          'attraction',
          'campTripOrRetreat',
          'classTrainingOrWorkshop',
          'concertOrPerformance',
          'conference',
          'convention',
          'dinnerOrGala',
          'festivalOrFair',
          'gameOrCompetition',
          'meetingOrNetworkingEvent',
          'partyOrSocialGathering',
          'raceOrEnduranceEvent',
          'rally',
          'screening',
          'seminarOrTalk',
          'tour',
          'tournament',
          'tradeShowConsumerShowOrExpo',
          'other',
        ])
        .optional(),
      category: z.string(),
      subcategory: z.string().optional(),
    })
    .optional(),
  artists: z
    .array(
      z.object({
        origin: z.string(),
        name: z.string(),
        externalId: z.string().optional(),
        spotifyId: z.string().optional(),
      }),
    )
    .optional(),
  public: z.boolean(),
  published: z.boolean(),
  suspendSales: z.boolean().optional(),
  markedAsSoldOut: z.boolean().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  timezone: z.string(),
  totalCapacity: z.number(),
  ticketTypes: z.array(humantixTicketTypeSchema).optional(),
  pricing: z
    .object({
      minimumPrice: z.number(),
      maximumPrice: z.number(),
    })
    .optional(),
  paymentOptions: z
    .object({
      refundSettings: z
        .object({
          refundPolicy: z.string().optional(),
          customRefundPolicy: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
  publishedAt: z.string().optional(),
  additionalQuestions: z
    .array(
      z.object({
        _id: z.string(),
        inputType: z
          .enum(['text', 'number', 'email', 'url', 'date', 'file'])
          .optional(),
        question: z.string(),
        required: z.boolean(),
        description: z.string().optional(),
        perOrder: z.boolean(),
        disabled: z.boolean().optional(),
        createdAt: z.string().optional(),
        updatedAt: z.string().optional(),
      }),
    )
    .optional(),
  bannerImage: z
    .object({
      url: z.string(),
    })
    .optional(),
  featureImage: z
    .object({
      url: z.string(),
    })
    .optional(),
  socialImage: z
    .object({
      url: z.string(),
    })
    .optional(),
  eventLocation: humantixEventLocationSchema.optional(),
  dates: humantixEventDatesSchema.optional(),
  packagedTickets: z.array(humantixPackagedTicketSchema).optional(),
  accessibility: z
    .object({
      contactName: z.string(),
      contactNumber: z.string(),
      travelInstructions: z.string(),
      entryInstructions: z.string(),
      afterEntryInstructions: z.string(),
      hazards: z.string(),
      toiletLocation: z.string(),
      disabledParking: z.string(),
      features: z
        .object({
          access: z.boolean(),
          wheelchairAccessibility: z.boolean(),
          audioDescription: z.boolean(),
          telephoneTypewriter: z.boolean(),
          volumeControlTelephone: z.boolean(),
          assistiveListeningSystems: z.boolean(),
          signLanguageInterpretation: z.boolean(),
          accessiblePrint: z.boolean(),
          closedCaptioning: z.boolean(),
          openedCaptioning: z.boolean(),
          brailleSymbol: z.boolean(),
        })
        .optional(),
    })
    .optional(),
  affiliateCode: z
    .object({
      code: z.string(),
    })
    .optional(),
  keywords: z.array(z.string()).optional(),
  location: z.enum([
    'AU',
    'NZ',
    'US',
    'FJ',
    'CA',
    'GB',
    'SG',
    'DE',
    'MY',
    'MX',
  ]),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type HumantixEvent = z.infer<typeof humantixEventSchema>;

export const humantixPaginatedEventResponseSchema = z.object({
  total: z.number(),
  pageSize: z.number(),
  page: z.number(),
  events: z.array(humantixEventSchema),
});

export type HumantixPaginatedEventResponse = z.infer<
  typeof humantixPaginatedEventResponseSchema
>;

class HumantixApi {
  private apiKey: string = env.HUMANTIX_API_KEY;
  private baseApiUrl: string = 'https://api.humanitix.com';
  private authHeader: Record<string, string> = {
    'x-api-key': this.apiKey,
  };

  constructor() {}

  public fetchFutureEvents = async (): Promise<
    HumantixPaginatedEventResponse & { status: number }
  > => {
    const config: RequestInit = {
      method: 'GET',
      headers: this.authHeader,
      next: { revalidate: 1800 },
    };

    const response = await fetch(
      `${this.baseApiUrl}/v1/events?page=1&pageSize=5&inFutureOnly=true`,
      config,
    );
    if (response.status !== 200) {
      return {
        status: response.status,
        ...humantixPaginatedEventResponseSchema.parse({
          total: 0,
          page: 0,
          pageSize: 0,
          events: [],
        }),
      };
    }

    const json = await response.json();
    return {
      ...humantixPaginatedEventResponseSchema.parse(json),
      status: response.status,
    };
  };

  public fetchPastEvents = async ({
    page = 1,
    pageSize = 20,
    since,
  }: {
    pageSize?: number;
    page?: number;
    since?: string; // ISO8601
  }): Promise<HumantixEvent[]> => {
    const config: RequestInit = {
      method: 'GET',
      headers: this.authHeader,
      next: { revalidate: 1800 },
    };

    const url = `${this.baseApiUrl}/v1/events?page=${page}&pageSize=${pageSize}&inFutureOnly=false`;

    const response = await fetch(url, config);

    // TODO handle 400 and 401
    // https://humanitix.stoplight.io/docs/humanitix-public-api/476881e4b5d55-get-events
    const json = await response.json();
    const result = humantixPaginatedEventResponseSchema.parse(json);

    const now = dayjs();
    const specificDate = since ? dayjs(since) : null;

    return result.events.filter((event) => {
      const eventEnd = dayjs(event.endDate);

      const isBeforeNow = eventEnd.isBefore(now);

      const isAfterSpecificDate = specificDate
        ? eventEnd.isAfter(specificDate)
        : true;

      return isBeforeNow && isAfterSpecificDate;
    });
  };
}

const humantixApi = new HumantixApi();

export default humantixApi;
