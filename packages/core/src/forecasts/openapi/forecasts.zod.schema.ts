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
const Forecast = z
  .object({
    vulnerabilityId: z.string(),
    score: z.number(),
    scoreAfterManipulationScreening: z.number().optional(),
    independentCredibleSources: z.number().int().optional(),
    contributingSignalIds: z.array(z.string()).optional(),
    topSources: z
      .array(
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
      )
      .optional(),
    scoringVersion: z.string(),
    formedAt: z.string().datetime({ offset: true }).optional(),
    absenceIsNotSafety: z.boolean().optional().default(true),
  })
  .passthrough();
const ForecastListData = z
  .object({
    items: z.array(
      z
        .object({
          vulnerabilityId: z.string(),
          score: z.number(),
          scoreAfterManipulationScreening: z.number().optional(),
          independentCredibleSources: z.number().int().optional(),
          contributingSignalIds: z.array(z.string()).optional(),
          topSources: z
            .array(
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
            )
            .optional(),
          scoringVersion: z.string(),
          formedAt: z.string().datetime({ offset: true }).optional(),
          absenceIsNotSafety: z.boolean().optional().default(true),
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
const ForecastListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              vulnerabilityId: z.string(),
              score: z.number(),
              scoreAfterManipulationScreening: z.number().optional(),
              independentCredibleSources: z.number().int().optional(),
              contributingSignalIds: z.array(z.string()).optional(),
              topSources: z
                .array(
                  z
                    .object({
                      id: z.string(),
                      handle: z.string(),
                      platform: z
                        .enum([
                          'social',
                          'blog',
                          'vendor_advisory',
                          'mailing_list',
                        ])
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
                )
                .optional(),
              scoringVersion: z.string(),
              formedAt: z.string().datetime({ offset: true }).optional(),
              absenceIsNotSafety: z.boolean().optional().default(true),
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
const VulnerabilityId = z.string();
const ForecastResponse = z
  .object({
    data: z
      .object({
        vulnerabilityId: z.string(),
        score: z.number(),
        scoreAfterManipulationScreening: z.number().optional(),
        independentCredibleSources: z.number().int().optional(),
        contributingSignalIds: z.array(z.string()).optional(),
        topSources: z
          .array(
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
          )
          .optional(),
        scoringVersion: z.string(),
        formedAt: z.string().datetime({ offset: true }).optional(),
        absenceIsNotSafety: z.boolean().optional().default(true),
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
const ScoringVersion = z
  .object({
    version: z.string(),
    effectiveFrom: z.string().datetime({ offset: true }),
    effectiveTo: z.string().datetime({ offset: true }).optional(),
    changeSummary: z.string().optional(),
    heldForWarningIds: z.boolean().optional().default(true),
  })
  .passthrough();
const ScoringVersionListData = z
  .object({
    items: z.array(
      z
        .object({
          version: z.string(),
          effectiveFrom: z.string().datetime({ offset: true }),
          effectiveTo: z.string().datetime({ offset: true }).optional(),
          changeSummary: z.string().optional(),
          heldForWarningIds: z.boolean().optional().default(true),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ScoringVersionListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              version: z.string(),
              effectiveFrom: z.string().datetime({ offset: true }),
              effectiveTo: z.string().datetime({ offset: true }).optional(),
              changeSummary: z.string().optional(),
              heldForWarningIds: z.boolean().optional().default(true),
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
  Forecast,
  ForecastListData,
  ResponseMeta,
  ForecastListResponse,
  VulnerabilityId,
  ForecastResponse,
  ScoringVersion,
  ScoringVersionListData,
  ScoringVersionListResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/forecasts',
    alias: 'listForecasts',
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
        name: 'minScore',
        type: 'Query',
        schema: z.number().optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  vulnerabilityId: z.string(),
                  score: z.number(),
                  scoreAfterManipulationScreening: z.number().optional(),
                  independentCredibleSources: z.number().int().optional(),
                  contributingSignalIds: z.array(z.string()).optional(),
                  topSources: z
                    .array(
                      z
                        .object({
                          id: z.string(),
                          handle: z.string(),
                          platform: z
                            .enum([
                              'social',
                              'blog',
                              'vendor_advisory',
                              'mailing_list',
                            ])
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
                    )
                    .optional(),
                  scoringVersion: z.string(),
                  formedAt: z.string().datetime({ offset: true }).optional(),
                  absenceIsNotSafety: z.boolean().optional().default(true),
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
    path: '/v1/forecasts/:vulnerabilityId',
    alias: 'getForecast',
    requestFormat: 'json',
    parameters: [
      {
        name: 'vulnerabilityId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            vulnerabilityId: z.string(),
            score: z.number(),
            scoreAfterManipulationScreening: z.number().optional(),
            independentCredibleSources: z.number().int().optional(),
            contributingSignalIds: z.array(z.string()).optional(),
            topSources: z
              .array(
                z
                  .object({
                    id: z.string(),
                    handle: z.string(),
                    platform: z
                      .enum([
                        'social',
                        'blog',
                        'vendor_advisory',
                        'mailing_list',
                      ])
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
              )
              .optional(),
            scoringVersion: z.string(),
            formedAt: z.string().datetime({ offset: true }).optional(),
            absenceIsNotSafety: z.boolean().optional().default(true),
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
    path: '/v1/scoring-versions',
    alias: 'listScoringVersions',
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
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  version: z.string(),
                  effectiveFrom: z.string().datetime({ offset: true }),
                  effectiveTo: z.string().datetime({ offset: true }).optional(),
                  changeSummary: z.string().optional(),
                  heldForWarningIds: z.boolean().optional().default(true),
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
