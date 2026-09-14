import { useEffect, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { decisionsService } from '@/services/domains/decisions';

export function DecisionsPage() {
  const [deferrals, setDeferrals] = useState<unknown[]>([]);
  useEffect(() => {
    decisionsService
      .listDeferralsDue()
      .then((res) => {
        const data = (res as { data?: { items?: unknown[] } }).data;
        setDeferrals(data?.items ?? []);
      })
      .catch(() => setDeferrals([]));
  }, []);
  return (
    <section>
      <PageHeader
        title="Decisions & deferrals"
        subtitle="Append-only accept / defer / decline with review pins."
      />
      <h2>Deferrals due</h2>
      {deferrals.length === 0 ? <p>No deferrals due.</p> : <pre>{JSON.stringify(deferrals, null, 2)}</pre>}
    </section>
  );
}
