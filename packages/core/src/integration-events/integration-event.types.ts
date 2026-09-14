/**
 * Integration event type definition (registry entries).
 */

export type IntegrationEventTypeDefinition = {
  type: string;
  domain: string;
  aggregateType?: string;
  description?: string;
  defaultDeliveryMode?: 'sync' | 'async';
};
