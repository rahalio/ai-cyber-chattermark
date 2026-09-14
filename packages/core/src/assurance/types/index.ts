/**
 * Assurance Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/assurance.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AccuracyReport = components["schemas"]["AccuracyReport"];
export type Backtest = components["schemas"]["Backtest"];
export type BacktestListData = components["schemas"]["BacktestListData"];
export type EvidentiaryTimeline = components["schemas"]["EvidentiaryTimeline"];
export type EvidentiaryTimelineRequest = components["schemas"]["EvidentiaryTimelineRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type AssembleEvidentiaryTimelineRequestInput = NonNullable<operations["assembleEvidentiaryTimeline"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListBacktestsParams = NonNullable<operations["listBacktests"]["parameters"]["query"]>;
export type GetAccuracyReportParams = NonNullable<operations["getAccuracyReport"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListBacktestsResponse = operations["listBacktests"]["responses"]["200"]["content"]["application/json"];
export type GetAccuracyReportResponse = operations["getAccuracyReport"]["responses"]["200"]["content"]["application/json"];
export type AssembleEvidentiaryTimelineResponse = operations["assembleEvidentiaryTimeline"]["responses"]["200"]["content"]["application/json"];


