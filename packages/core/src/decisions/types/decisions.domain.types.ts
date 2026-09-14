/**
 * Decisions Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/decisions.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ChangeWindow = components["schemas"]["ChangeWindow"];
export type CompensatingControl = components["schemas"]["CompensatingControl"];
export type Decision = components["schemas"]["Decision"];
export type DecisionCreate = components["schemas"]["DecisionCreate"];
export type DecisionId = components["schemas"]["DecisionId"];
export type DecisionListData = components["schemas"]["DecisionListData"];
export type Deferral = components["schemas"]["Deferral"];
export type DeferralListData = components["schemas"]["DeferralListData"];
export type WarningId = components["schemas"]["WarningId"];
export type Due = operations["listDeferralsDue"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateDecisionRequestInput = NonNullable<operations["createDecision"]["requestBody"]>["content"]["application/json"];
export type AttachCompensatingControlRequestInput = NonNullable<operations["attachCompensatingControl"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type CreateDecisionParams = operations["createDecision"]["parameters"]["path"];
export type ListDecisionsParams = NonNullable<operations["listDecisions"]["parameters"]["query"]>;
export type ListDeferralsDueParams = NonNullable<operations["listDeferralsDue"]["parameters"]["query"]>;
export type AttachCompensatingControlParams = operations["attachCompensatingControl"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type CreateDecisionResponse = operations["createDecision"]["responses"]["201"]["content"]["application/json"];
export type ListDecisionsResponse = operations["listDecisions"]["responses"]["200"]["content"]["application/json"];
export type ListDeferralsDueResponse = operations["listDeferralsDue"]["responses"]["200"]["content"]["application/json"];
export type AttachCompensatingControlResponse = operations["attachCompensatingControl"]["responses"]["200"]["content"]["application/json"];


