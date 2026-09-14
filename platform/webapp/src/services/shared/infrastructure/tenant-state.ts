export function getEffectiveOrgId(): string {
  return localStorage.getItem('cm_tenant') ?? 'tnt_demo';
}
