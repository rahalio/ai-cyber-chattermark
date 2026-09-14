import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const Source = z
  .object({
    id: z.string(),
    handle: z.string(),
    platform: z
      .enum(['social', 'blog', 'vendor_advisory', 'mailing_list'])
      .optional(),
    trustState: z.enum([
      'unrated',
      'provisional',
      'trusted',
      'degraded',
      'suppressed',
    ]),
    evaluatedWarnings: z.number().int().optional(),
    suspectedInauthentic: z.boolean().optional(),
  })
  .passthrough();
const SourceListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string(),
          handle: z.string(),
          platform: z
            .enum(['social', 'blog', 'vendor_advisory', 'mailing_list'])
            .optional(),
          trustState: z.enum([
            'unrated',
            'provisional',
            'trusted',
            'degraded',
            'suppressed',
          ]),
          evaluatedWarnings: z.number().int().optional(),
          suspectedInauthentic: z.boolean().optional(),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const SourceListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              handle: z.string(),
              platform: z
                .enum(['social', 'blog', 'vendor_advisory', 'mailing_list'])
                .optional(),
              trustState: z.enum([
                'unrated',
                'provisional',
                'trusted',
                'degraded',
                'suppressed',
              ]),
              evaluatedWarnings: z.number().int().optional(),
              suspectedInauthentic: z.boolean().optional(),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const SourceId = z.string();
const SourceReliability = z
  .object({
    sourceId: z.string(),
    evaluatedWarnings: z.number().int(),
    correctAgainstPublishedSeverity: z.number().int().optional(),
    precisionAgainstPublishedSeverity: z.number().optional(),
    precisionAgainstExploitation: z.number().optional(),
    medianLeadDays: z.number().optional(),
    lastEvaluatedAt: z.string().datetime({ offset: true }).optional(),
    purposeStatement: z.string().optional(),
    retentionExpiresAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const SourceReliabilityResponse = z
  .object({
    data: z
      .object({
        sourceId: z.string(),
        evaluatedWarnings: z.number().int(),
        correctAgainstPublishedSeverity: z.number().int().optional(),
        precisionAgainstPublishedSeverity: z.number().optional(),
        precisionAgainstExploitation: z.number().optional(),
        medianLeadDays: z.number().optional(),
        lastEvaluatedAt: z.string().datetime({ offset: true }).optional(),
        purposeStatement: z.string().optional(),
        retentionExpiresAt: z.string().datetime({ offset: true }).optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const ManipulationFinding = z
  .object({
    id: z.string(),
    vulnerabilityId: z.string(),
    detectedAt: z.string().datetime({ offset: true }),
    pattern: z
      .enum([
        'coordinated_burst',
        'near_identical_text',
        'reciprocal_amplification',
        'new_account_cluster',
      ])
      .optional(),
    suspectSourceIds: z.array(z.string()).optional(),
    signalsAffected: z.number().int().optional(),
    actionTaken: z
      .enum([
        'none',
        'forecast_recomputed',
        'warning_degraded',
        'warning_withheld',
      ])
      .optional(),
  })
  .passthrough();
const ManipulationFindingListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string(),
          vulnerabilityId: z.string(),
          detectedAt: z.string().datetime({ offset: true }),
          pattern: z
            .enum([
              'coordinated_burst',
              'near_identical_text',
              'reciprocal_amplification',
              'new_account_cluster',
            ])
            .optional(),
          suspectSourceIds: z.array(z.string()).optional(),
          signalsAffected: z.number().int().optional(),
          actionTaken: z
            .enum([
              'none',
              'forecast_recomputed',
              'warning_degraded',
              'warning_withheld',
            ])
            .optional(),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ManipulationFindingListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              vulnerabilityId: z.string(),
              detectedAt: z.string().datetime({ offset: true }),
              pattern: z
                .enum([
                  'coordinated_burst',
                  'near_identical_text',
                  'reciprocal_amplification',
                  'new_account_cluster',
                ])
                .optional(),
              suspectSourceIds: z.array(z.string()).optional(),
              signalsAffected: z.number().int().optional(),
              actionTaken: z
                .enum([
                  'none',
                  'forecast_recomputed',
                  'warning_degraded',
                  'warning_withheld',
                ])
                .optional(),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();

export const schemas: any = {
  Problem,
  Source,
  SourceListData,
  ResponseMeta,
  SourceListResponse,
  SourceId,
  SourceReliability,
  SourceReliabilityResponse,
  ManipulationFinding,
  ManipulationFindingListData,
  ManipulationFindingListResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/sources',
    alias: 'listSources',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(200).optional().default(50),
      },
      {
        name: 'trustState',
        type: 'Query',
        schema: z
          .enum(['unrated', 'provisional', 'trusted', 'degraded', 'suppressed'])
          .optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string(),
                  handle: z.string(),
                  platform: z
                    .enum(['social', 'blog', 'vendor_advisory', 'mailing_list'])
                    .optional(),
                  trustState: z.enum([
                    'unrated',
                    'provisional',
                    'trusted',
                    'degraded',
                    'suppressed',
                  ]),
                  evaluatedWarnings: z.number().int().optional(),
                  suspectedInauthentic: z.boolean().optional(),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/sources/:sourceId/reliability',
    alias: 'getSourceReliability',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sourceId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            sourceId: z.string(),
            evaluatedWarnings: z.number().int(),
            correctAgainstPublishedSeverity: z.number().int().optional(),
            precisionAgainstPublishedSeverity: z.number().optional(),
            precisionAgainstExploitation: z.number().optional(),
            medianLeadDays: z.number().optional(),
            lastEvaluatedAt: z.string().datetime({ offset: true }).optional(),
            purposeStatement: z.string().optional(),
            retentionExpiresAt: z
              .string()
              .datetime({ offset: true })
              .optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/sources/manipulation-findings',
    alias: 'listManipulationFindings',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(200).optional().default(50),
      },
      {
        name: 'vulnerabilityId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string(),
                  vulnerabilityId: z.string(),
                  detectedAt: z.string().datetime({ offset: true }),
                  pattern: z
                    .enum([
                      'coordinated_burst',
                      'near_identical_text',
                      'reciprocal_amplification',
                      'new_account_cluster',
                    ])
                    .optional(),
                  suspectSourceIds: z.array(z.string()).optional(),
                  signalsAffected: z.number().int().optional(),
                  actionTaken: z
                    .enum([
                      'none',
                      'forecast_recomputed',
                      'warning_degraded',
                      'warning_withheld',
                    ])
                    .optional(),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
