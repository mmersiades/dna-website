import { env } from '@/env';
import { z } from 'zod';

export const humantixTicketTypeSchema = z.object({
  _id: z.string(),
  name: z.string(),
  price: z.number(),
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
  quantity: z.number(),
  description: z.string().optional(),
  disabled: z.boolean(),
  deleted: z.boolean(),
  isDonation: z.boolean(),
});

export type HumantixTicketType = z.infer<typeof humantixTicketTypeSchema>;

export const humantixPackagedTicketSchema = z.object({
  _id: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  description: z.string(),
  disabled: z.boolean(),
  deleted: z.boolean(),
  tickets: z.array(
    z.object({
      ticketTypeId: z.string(),
      quantity: z.number(),
    }),
  ),
});

export type HumantixPackagedTicket = z.infer<
  typeof humantixPackagedTicketSchema
>;

export const humantixEventSchema = z.object({
  _id: z.string(),
  userId: z.string(),
  organiserId: z.string().optional(),
  currency: z.string(),
  name: z.string(),
  description: z.string(),
  sharingDescription: z.string().optional(),
  slug: z.string(),
  url: z.string(),
  tagIds: z.array(z.string()),
  category: z.string().optional(),
  classification: z.object({
    category: z.string(),
    subcategory: z.string().optional(),
  }),
  artists: z
    .array(
      z.object({
        origin: z.string(),
        name: z.string(),
        externalId: z.string(),
      }),
    )
    .optional(),
  public: z.boolean(),
  published: z.boolean(),
  suspendSales: z.boolean(),
  markedAsSoldOut: z.boolean(),
  startDate: z.string(),
  endDate: z.string(),
  timezone: z.string(),
  totalCapacity: z.number(),
  ticketTypes: z.array(humantixTicketTypeSchema),
  pricing: z.object({
    minimumPrice: z.number(),
    maximumPrice: z.number(),
  }),
  paymentOptions: z.object({
    refundSettings: z.object({
      refundPolicy: z.string().optional(),
      customRefundPolicy: z.string().optional(),
    }),
  }),
  publishedAt: z.string().optional(),
  additionalQuestions: z.array(
    z.object({
      _id: z.string(),
      inputType: z.string().optional(),
      question: z.string(),
      required: z.boolean(),
      description: z.string().optional(),
      perOrder: z.boolean(),
      disabled: z.boolean(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  ),
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
  eventLocation: z.object({
    type: z.string(),
    venueName: z.string(),
    address: z.string(),
    latLng: z.tuple([z.number(), z.number()]),
    instructions: z.string().optional(),
    placeId: z.string(),
    onlineUrl: z.string().optional(),
    mapUrl: z.string().optional(),
    city: z.string(),
    region: z.string(),
    country: z.string(),
  }),
  dates: z.array(
    z.object({
      _id: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      scheduleId: z.string().optional(),
      disabled: z.boolean(),
      deleted: z.boolean(),
    }),
  ),
  packagedTickets: z.array(humantixPackagedTicketSchema),
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
      features: z.object({
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
      }),
    })
    .optional(),
  affiliateCode: z
    .object({
      code: z.string(),
    })
    .optional(),
  keywords: z.array(z.string()),
  location: z.string(),
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

// TODO: Build pagination into the class
class HumantixApi {
  private apiKey: string = env.HUMANTIX_API_KEY;
  private baseApiUrl: string = 'https://api.humanitix.com';
  private authHeader: Record<string, string> = {
    'x-api-key': this.apiKey,
  };

  constructor() {}

  public fetchEvents = async ({
    futureOnly = false,
    page = 1,
    pageSize = 10,
    since,
  }: {
    futureOnly?: boolean;
    pageSize?: number;
    page?: number;
    since?: string; // ISO8601
  }): Promise<HumantixPaginatedEventResponse> => {
    const config: RequestInit = {
      method: 'GET',
      headers: this.authHeader,
    };

    const response = await fetch(
      `${this.baseApiUrl}/v1/events?page=${page}&pageSize=${pageSize}&inFutureOnly=${futureOnly}${since ? '&since=' + since : ''}`,
      config,
    );

    // TODO handle 400 and 401
    // https://humanitix.stoplight.io/docs/humanitix-public-api/476881e4b5d55-get-events
    const json = await response.json();
    return humantixPaginatedEventResponseSchema.parse(json);
  };
}

const humantixApi = new HumantixApi();

export default humantixApi;
