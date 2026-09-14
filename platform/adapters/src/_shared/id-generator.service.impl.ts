/**
 * ID Generator Service Implementation — Chattermark prefixes.
 */

import type { DomainCode } from '@chattermark/core/_shared/helpers';
import { DOMAIN_PREFIX_MAP, isValidDomainId } from '@chattermark/core';
import { ulid } from 'ulid';
import type { IdGeneratorService } from '@chattermark/services/_shared';

export function generateIdWithPrefix(prefix: string): string {
  if (!prefix || prefix.length !== 3 || !/^[a-z]{3}$/.test(prefix)) {
    throw new Error(
      `Invalid domain prefix: "${prefix}". Must be exactly 3 lowercase letters.`
    );
  }
  const id = `${prefix}_${ulid().toLowerCase()}`;
  if (!isValidDomainId(id)) {
    throw new Error(`Generated ID "${id}" failed validation.`);
  }
  return id;
}

export class DefaultIdGeneratorService implements IdGeneratorService {
  tntId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.tenant);
  }
  keyId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.apiKey);
  }
  idnId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.identity);
  }
  autId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.auth);
  }
  sigId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.signals);
  }
  srcId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.sources);
  }
  fctId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.forecasts);
  }
  estId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.estate);
  }
  wrnId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.warnings);
  }
  decId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.decisions);
  }
  asrId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.assurance);
  }
  govId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.governance);
  }
  generateIdForDomain(domainCode: DomainCode): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP[domainCode]);
  }
}

let idGeneratorService: DefaultIdGeneratorService | null = null;

export function getIdGeneratorService(): DefaultIdGeneratorService {
  if (!idGeneratorService) {
    idGeneratorService = new DefaultIdGeneratorService();
  }
  return idGeneratorService;
}
