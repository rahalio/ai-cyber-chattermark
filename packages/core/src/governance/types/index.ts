/**
 * Governance Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/governance.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AuditEvent = components["schemas"]["AuditEvent"];
export type AuditEventListData = components["schemas"]["AuditEventListData"];
export type EscalationPolicy = components["schemas"]["EscalationPolicy"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type UpdateEscalationPolicyRequestInput = NonNullable<operations["updateEscalationPolicy"]["requestBody"]>["content"]["application/json"];
export type UpdateEscalationPolicyRequest = UpdateEscalationPolicyRequestInput;


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListAuditEventsParams = NonNullable<operations["listAuditEvents"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type GetEscalationPolicyResponse = operations["getEscalationPolicy"]["responses"]["200"]["content"]["application/json"];
export type UpdateEscalationPolicyResponse = operations["updateEscalationPolicy"]["responses"]["200"]["content"]["application/json"];
export type ListAuditEventsResponse = operations["listAuditEvents"]["responses"]["200"]["content"]["application/json"];


