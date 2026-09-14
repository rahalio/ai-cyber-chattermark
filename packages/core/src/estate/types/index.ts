/**
 * Estate Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/estate.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type EstateItem = components["schemas"]["EstateItem"];
export type EstateMatch = components["schemas"]["EstateMatch"];
export type EstateItemListData = components["schemas"]["EstateItemListData"];
export type EstateMatchListData = components["schemas"]["EstateMatchListData"];
export type EstateSyncResult = components["schemas"]["EstateSyncResult"];
export type EstateSyncRequest = components["schemas"]["EstateSyncRequest"];
export type Match = operations["listEstateMatches"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type SyncEstateItemsRequestInput = NonNullable<operations["syncEstateItems"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListEstateItemsParams = NonNullable<operations["listEstateItems"]["parameters"]["query"]>;
export type ListEstateMatchesParams = NonNullable<operations["listEstateMatches"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListEstateItemsResponse = operations["listEstateItems"]["responses"]["200"]["content"]["application/json"];
export type SyncEstateItemsResponse = operations["syncEstateItems"]["responses"]["200"]["content"]["application/json"];
export type ListEstateMatchesResponse = operations["listEstateMatches"]["responses"]["200"]["content"]["application/json"];


