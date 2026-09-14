import { useEffect, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { sourcesService } from '@/services/domains/sources';

export function SourcesPage() {
  const [items, setItems] = useState<unknown[]>([]);
  useEffect(() => {
    sourcesService
      .listSources()
      .then((res) => setItems((res as { data?: { items?: unknown[] } }).data?.items ?? []))
      .catch(() => setItems([]));
  }, []);
  return (
    <section>
      <PageHeader title="Source ledger" subtitle="Reliability and manipulation findings." />
      {items.length === 0 ? <p>No sources loaded.</p> : <pre>{JSON.stringify(items, null, 2)}</pre>}
    </section>
  );
}
