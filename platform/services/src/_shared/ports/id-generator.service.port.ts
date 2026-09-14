/**
 * IdGeneratorService Port — Chattermark domain prefixes.
 */

import type { DomainCode } from '@chattermark/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  sigId(): string;
  srcId(): string;
  fctId(): string;
  estId(): string;
  wrnId(): string;
  decId(): string;
  asrId(): string;
  govId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
