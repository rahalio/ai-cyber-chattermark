import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclaimer } from '../components/Disclaimer';
import { PageHeader } from '../components/PageHeader';
import { warningsService } from '@/services/domains/warnings';
import styles from './ShortlistPage.module.css';

type Shortlist = {
  period?: string;
  declaredCapacity?: number;
  warnings?: Array<{
    id: string;
    vulnerabilityId: string;
    status: string;
    leadDaysAheadOfAdvisory?: number;
    forecastSnapshot?: { score?: number; independentCredibleSources?: number };
  }>;
  omittedWarningCount?: number;
  capacityStatement?: string;
};

export function ShortlistPage() {
  const [data, setData] = useState<Shortlist | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const capacity = data?.declaredCapacity ?? 5;
  const used = data?.warnings?.length ?? 0;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await warningsService.getWarningShortlist({ capacity: 5 });
        if (!cancelled) setData((res as { data: Shortlist }).data);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : String(e));
          // Demo fallback so UI is reviewable without a live API
          setData({
            period: '2026-W12',
            declaredCapacity: 5,
            omittedWarningCount: 12,
            capacityStatement: 'Emergency windows this period: 5',
            warnings: [
              {
                id: 'wrn_demo_1',
                vulnerabilityId: 'CVE-2016-5195',
                status: 'validated',
                leadDaysAheadOfAdvisory: 4,
                forecastSnapshot: { score: 0.91, independentCredibleSources: 3 },
              },
              {
                id: 'wrn_demo_2',
                vulnerabilityId: 'CVE-2021-44228',
                status: 'issued',
                leadDaysAheadOfAdvisory: 2,
                forecastSnapshot: { score: 0.87, independentCredibleSources: 4 },
              },
            ],
          });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section>
      <PageHeader
        title="Capacity shortlist"
        subtitle="Which emergency windows do we spend this period?"
      />
      <Disclaimer />
      <div className={styles.meter} aria-label="Capacity meter">
        <div className={styles.meterLabel}>
          Windows used {used} / {capacity}
        </div>
        <div className={styles.track}>
          <div
            className={styles.fill}
            style={{ width: `${Math.min(100, (used / Math.max(capacity, 1)) * 100)}%` }}
          />
        </div>
        {data?.capacityStatement ? (
          <p className={styles.caption}>{data.capacityStatement}</p>
        ) : null}
      </div>
      {loading ? <p className={styles.muted}>Loading shortlist…</p> : null}
      {error ? (
        <p className={styles.hint}>
          Live API unavailable — showing demo shortlist. ({error.slice(0, 120)})
        </p>
      ) : null}
      <ul className={styles.list}>
        {(data?.warnings ?? []).map((w, i) => (
          <li key={w.id} className={styles.row} style={{ animationDelay: `${i * 60}ms` }}>
            <Link to={`/warnings/${w.id}`} className={styles.rowLink}>
              <span className={styles.cve}>{w.vulnerabilityId}</span>
              <span className={styles.meta}>
                score {w.forecastSnapshot?.score?.toFixed(2) ?? '—'} · sources{' '}
                {w.forecastSnapshot?.independentCredibleSources ?? '—'} · lead{' '}
                {w.leadDaysAheadOfAdvisory ?? '—'}d
              </span>
              <span className={styles.status}>{w.status}</span>
            </Link>
          </li>
        ))}
      </ul>
      {data?.omittedWarningCount ? (
        <p className={styles.muted}>
          {data.omittedWarningCount} warnings omitted to respect declared capacity.
        </p>
      ) : null}
    </section>
  );
}
