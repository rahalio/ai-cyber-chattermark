import { useState } from 'react';
import type { FormEvent } from 'react';
import { PageHeader } from '../components/PageHeader';
import { assuranceService } from '@/services/domains/assurance';

export function TimelinesPage() {
  const [purpose, setPurpose] = useState('board_report');
  const [result, setResult] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      const res = await assuranceService.assembleEvidentiaryTimeline({ purpose });
      setResult((res as { data?: unknown }).data);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  }

  return (
    <section>
      <PageHeader
        title="Evidentiary timelines"
        subtitle="Export what was known when — for audit and insurance."
      />
      <form onSubmit={onSubmit} style={{ display: 'flex', gap: '0.75rem', alignItems: 'end' }}>
        <label>
          Purpose
          <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            <option value="regulatory_review">Regulatory review</option>
            <option value="insurance_claim">Insurance claim</option>
            <option value="board_report">Board report</option>
            <option value="internal_investigation">Internal investigation</option>
          </select>
        </label>
        <button type="submit">Assemble</button>
      </form>
      {error ? <p role="alert">{error}</p> : null}
      {result ? <pre>{JSON.stringify(result, null, 2)}</pre> : null}
    </section>
  );
}
