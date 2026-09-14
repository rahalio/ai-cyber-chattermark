import { useEffect, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { estateService } from '@/services/domains/estate';

export function EstatePage() {
  const [items, setItems] = useState<unknown[]>([]);
  useEffect(() => {
    estateService
      .listEstateItems()
      .then((res) => setItems((res as { data?: { items?: unknown[] } }).data?.items ?? []))
      .catch(() => setItems([]));
  }, []);
  return (
    <section>
      <PageHeader title="Estate scope" subtitle="Tenant-private inventory and applicability." />
      {items.length === 0 ? <p>No estate items loaded.</p> : <pre>{JSON.stringify(items, null, 2)}</pre>}
    </section>
  );
}
