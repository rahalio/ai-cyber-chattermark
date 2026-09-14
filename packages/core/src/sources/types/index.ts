/**
 * Sources Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/sources.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ManipulationFinding = components["schemas"]["ManipulationFinding"];
export type ManipulationFindingListData = components["schemas"]["ManipulationFindingListData"];
export type SourceId = components["schemas"]["SourceId"];
export type SourceListData = components["schemas"]["SourceListData"];
export type SourceReliability = components["schemas"]["SourceReliability"];



// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListSourcesParams = NonNullable<operations["listSources"]["parameters"]["query"]>;
export type GetSourceReliabilityParams = operations["getSourceReliability"]["parameters"]["path"];
export type ListManipulationFindingsParams = NonNullable<operations["listManipulationFindings"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListSourcesResponse = operations["listSources"]["responses"]["200"]["content"]["application/json"];
export type GetSourceReliabilityResponse = operations["getSourceReliability"]["responses"]["200"]["content"]["application/json"];
export type ListManipulationFindingsResponse = operations["listManipulationFindings"]["responses"]["200"]["content"]["application/json"];


