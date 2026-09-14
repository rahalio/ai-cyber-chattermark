import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { warningsService } from '@/services/domains/warnings';

export function WarningsPage() {
  const [items, setItems] = useState<Array<{ id: string; vulnerabilityId: string; status: string }>>([]);
  useEffect(() => {
    warningsService
      .listWarnings()
      .then((res) => {
        const data = (res as { data?: { items?: typeof items } }).data;
        setItems(data?.items ?? []);
      })
      .catch(() => setItems([]));
  }, []);
  return (
    <section>
      <PageHeader title="Warnings" subtitle="Issued warnings with evidence snapshots." />
      {items.length === 0 ? (
        <p>No warnings loaded. Open a shortlist item or connect the API.</p>
      ) : (
        <ul>
          {items.map((w) => (
            <li key={w.id}>
              <Link to={`/warnings/${w.id}`}>
                {w.vulnerabilityId} — {w.status}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
