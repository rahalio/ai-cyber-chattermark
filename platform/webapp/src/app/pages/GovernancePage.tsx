import { useEffect, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { governanceService } from '@/services/domains/governance';

export function GovernancePage() {
  const [policy, setPolicy] = useState<unknown>(null);
  useEffect(() => {
    governanceService
      .getEscalationPolicy()
      .then((res) => setPolicy((res as { data?: unknown }).data ?? null))
      .catch(() => setPolicy(null));
  }, []);
  return (
    <section>
      <PageHeader
        title="Escalation policy"
        subtitle="Minimum sources, manipulation tolerance, capacity gates."
      />
      {policy ? <pre>{JSON.stringify(policy, null, 2)}</pre> : <p>No policy loaded.</p>}
    </section>
  );
}
