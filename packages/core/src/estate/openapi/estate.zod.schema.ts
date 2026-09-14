import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const syncEstateItems_Body = z
  .object({
    sourceSystem: z.enum(['cmdb', 'scanner', 'endpoint_agent', 'manual']),
    items: z.array(
      z
        .object({
          assetGroupId: z.string().optional(),
          vendor: z.string(),
          product: z.string(),
          version: z.string().optional(),
          instanceCount: z.number().int().optional(),
          businessCriticality: z
            .enum(['low', 'medium', 'high', 'critical'])
            .optional(),
          internetFacing: z.boolean().optional(),
        })
        .passthrough()
        .and(z.object({}).partial().passthrough())
    ),
  })
  .passthrough();
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
const EstateItem = z
  .object({
    assetGroupId: z.string().optional(),
    vendor: z.string(),
    product: z.string(),
    version: z.string().optional(),
    instanceCount: z.number().int().optional(),
    businessCriticality: z
      .enum(['low', 'medium', 'high', 'critical'])
      .optional(),
    internetFacing: z.boolean().optional(),
  })
  .passthrough();
const EstateItem_2 = z
  .object({
    assetGroupId: z.string().optional(),
    vendor: z.string(),
    product: z.string(),
    version: z.string().optional(),
    instanceCount: z.number().int().optional(),
    businessCriticality: z
      .enum(['low', 'medium', 'high', 'critical'])
      .optional(),
    internetFacing: z.boolean().optional(),
  })
  .passthrough()
  .and(z.object({}).partial().passthrough());
const EstateItemListData = z
  .object({
    items: z.array(
      z
        .object({
          assetGroupId: z.string().optional(),
          vendor: z.string(),
          product: z.string(),
          version: z.string().optional(),
          instanceCount: z.number().int().optional(),
          businessCriticality: z
            .enum(['low', 'medium', 'high', 'critical'])
            .optional(),
          internetFacing: z.boolean().optional(),
        })
        .passthrough()
        .and(z.object({}).partial().passthrough())
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
const EstateItemListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              assetGroupId: z.string().optional(),
              vendor: z.string(),
              product: z.string(),
              version: z.string().optional(),
              instanceCount: z.number().int().optional(),
              businessCriticality: z
                .enum(['low', 'medium', 'high', 'critical'])
                .optional(),
              internetFacing: z.boolean().optional(),
            })
            .passthrough()
            .and(z.object({}).partial().passthrough())
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
const EstateSyncRequest = z
  .object({
    sourceSystem: z.enum(['cmdb', 'scanner', 'endpoint_agent', 'manual']),
    items: z.array(
      z
        .object({
          assetGroupId: z.string().optional(),
          vendor: z.string(),
          product: z.string(),
          version: z.string().optional(),
          instanceCount: z.number().int().optional(),
          businessCriticality: z
            .enum(['low', 'medium', 'high', 'critical'])
            .optional(),
          internetFacing: z.boolean().optional(),
        })
        .passthrough()
        .and(z.object({}).partial().passthrough())
    ),
  })
  .passthrough();
const EstateSyncResult = z
  .object({
    sourceSystem: z.string(),
    itemsAccepted: z.number().int(),
    itemsRejected: z.number().int(),
    tenantPrivate: z.boolean().default(true),
    syncedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const EstateSyncResultResponse = z
  .object({
    data: z
      .object({
        sourceSystem: z.string(),
        itemsAccepted: z.number().int(),
        itemsRejected: z.number().int(),
        tenantPrivate: z.boolean().default(true),
        syncedAt: z.string().datetime({ offset: true }),
      })
      .partial()
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
const EstateMatch = z
  .object({
    vulnerabilityId: z.string(),
    applicable: z.boolean(),
    suppressionReason: z
      .enum([
        'product_not_present',
        'version_not_affected',
        'product_retired',
        'platform_not_used',
      ])
      .optional(),
    matchedItems: z
      .array(
        z
          .object({
            assetGroupId: z.string().optional(),
            vendor: z.string(),
            product: z.string(),
            version: z.string().optional(),
            instanceCount: z.number().int().optional(),
            businessCriticality: z
              .enum(['low', 'medium', 'high', 'critical'])
              .optional(),
            internetFacing: z.boolean().optional(),
          })
          .passthrough()
      )
      .optional(),
    affectedInstanceCount: z.number().int().optional(),
    highestBusinessCriticality: z
      .enum(['low', 'medium', 'high', 'critical'])
      .optional(),
  })
  .passthrough();
const EstateMatchListData = z
  .object({
    items: z.array(
      z
        .object({
          vulnerabilityId: z.string(),
          applicable: z.boolean(),
          suppressionReason: z
            .enum([
              'product_not_present',
              'version_not_affected',
              'product_retired',
              'platform_not_used',
            ])
            .optional(),
          matchedItems: z
            .array(
              z
                .object({
                  assetGroupId: z.string().optional(),
                  vendor: z.string(),
                  product: z.string(),
                  version: z.string().optional(),
                  instanceCount: z.number().int().optional(),
                  businessCriticality: z
                    .enum(['low', 'medium', 'high', 'critical'])
                    .optional(),
                  internetFacing: z.boolean().optional(),
                })
                .passthrough()
            )
            .optional(),
          affectedInstanceCount: z.number().int().optional(),
          highestBusinessCriticality: z
            .enum(['low', 'medium', 'high', 'critical'])
            .optional(),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const EstateMatchListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              vulnerabilityId: z.string(),
              applicable: z.boolean(),
              suppressionReason: z
                .enum([
                  'product_not_present',
                  'version_not_affected',
                  'product_retired',
                  'platform_not_used',
                ])
                .optional(),
              matchedItems: z
                .array(
                  z
                    .object({
                      assetGroupId: z.string().optional(),
                      vendor: z.string(),
                      product: z.string(),
                      version: z.string().optional(),
                      instanceCount: z.number().int().optional(),
                      businessCriticality: z
                        .enum(['low', 'medium', 'high', 'critical'])
                        .optional(),
                      internetFacing: z.boolean().optional(),
                    })
                    .passthrough()
                )
                .optional(),
              affectedInstanceCount: z.number().int().optional(),
              highestBusinessCriticality: z
                .enum(['low', 'medium', 'high', 'critical'])
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
  syncEstateItems_Body,
  Problem,
  EstateItem,
  EstateItem_2,
  EstateItemListData,
  ResponseMeta,
  EstateItemListResponse,
  EstateSyncRequest,
  EstateSyncResult,
  EstateSyncResultResponse,
  EstateMatch,
  EstateMatchListData,
  EstateMatchListResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/estate/items',
    alias: 'listEstateItems',
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
                  assetGroupId: z.string().optional(),
                  vendor: z.string(),
                  product: z.string(),
                  version: z.string().optional(),
                  instanceCount: z.number().int().optional(),
                  businessCriticality: z
                    .enum(['low', 'medium', 'high', 'critical'])
                    .optional(),
                  internetFacing: z.boolean().optional(),
                })
                .passthrough()
                .and(z.object({}).partial().passthrough())
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
    method: 'post',
    path: '/v1/estate/items',
    alias: 'syncEstateItems',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: syncEstateItems_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            sourceSystem: z.string(),
            itemsAccepted: z.number().int(),
            itemsRejected: z.number().int(),
            tenantPrivate: z.boolean().default(true),
            syncedAt: z.string().datetime({ offset: true }),
          })
          .partial()
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
        status: 422,
        description: `Semantically invalid request (e.g. PACK_EMPTY)`,
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
    path: '/v1/estate/matches',
    alias: 'listEstateMatches',
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
      {
        name: 'applicableOnly',
        type: 'Query',
        schema: z.boolean().optional(),
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
                  applicable: z.boolean(),
                  suppressionReason: z
                    .enum([
                      'product_not_present',
                      'version_not_affected',
                      'product_retired',
                      'platform_not_used',
                    ])
                    .optional(),
                  matchedItems: z
                    .array(
                      z
                        .object({
                          assetGroupId: z.string().optional(),
                          vendor: z.string(),
                          product: z.string(),
                          version: z.string().optional(),
                          instanceCount: z.number().int().optional(),
                          businessCriticality: z
                            .enum(['low', 'medium', 'high', 'critical'])
                            .optional(),
                          internetFacing: z.boolean().optional(),
                        })
                        .passthrough()
                    )
                    .optional(),
                  affectedInstanceCount: z.number().int().optional(),
                  highestBusinessCriticality: z
                    .enum(['low', 'medium', 'high', 'critical'])
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
