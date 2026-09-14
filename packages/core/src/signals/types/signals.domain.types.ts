/**
 * Signals Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/signals.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type EntityMention = components["schemas"]["EntityMention"];
export type SeverityOpinion = components["schemas"]["SeverityOpinion"];
export type Signal = components["schemas"]["Signal"];
export type SignalId = components["schemas"]["SignalId"];
export type SignalIngest = components["schemas"]["SignalIngest"];
export type SignalListData = components["schemas"]["SignalListData"];
export type VulnerabilityBinding = components["schemas"]["VulnerabilityBinding"];
export type VulnerabilityBindingResolve = components["schemas"]["VulnerabilityBindingResolve"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type IngestSignalRequestInput = NonNullable<operations["ingestSignal"]["requestBody"]>["content"]["application/json"];
export type ResolveSignalBindingRequestInput = NonNullable<operations["resolveSignalBinding"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListSignalsParams = NonNullable<operations["listSignals"]["parameters"]["query"]>;
export type GetSignalParams = operations["getSignal"]["parameters"]["path"];
export type ResolveSignalBindingParams = operations["resolveSignalBinding"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListSignalsResponse = operations["listSignals"]["responses"]["200"]["content"]["application/json"];
export type IngestSignalResponse = operations["ingestSignal"]["responses"]["202"]["content"]["application/json"];
export type GetSignalResponse = operations["getSignal"]["responses"]["200"]["content"]["application/json"];
export type ResolveSignalBindingResponse = operations["resolveSignalBinding"]["responses"]["200"]["content"]["application/json"];


