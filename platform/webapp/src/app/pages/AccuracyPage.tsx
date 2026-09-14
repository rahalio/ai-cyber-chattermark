import { useEffect, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { assuranceService } from '@/services/domains/assurance';

export function AccuracyPage() {
  const [report, setReport] = useState<unknown>(null);
  useEffect(() => {
    assuranceService
      .getAccuracyReport('2026-Q1')
      .then((res) => setReport((res as { data?: unknown }).data ?? null))
      .catch(() => setReport(null));
  }, []);
  return (
    <section>
      <PageHeader title="Back-test accuracy" subtitle="Self-reported precision and lead-time." />
      {report ? <pre>{JSON.stringify(report, null, 2)}</pre> : <p>No accuracy report loaded.</p>}
    </section>
  );
}
