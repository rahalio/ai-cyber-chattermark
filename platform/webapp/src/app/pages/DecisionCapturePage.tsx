import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { PageHeader } from '../components/PageHeader';
import { decisionsService } from '@/services/domains/decisions';

export function DecisionCapturePage() {
  const [params] = useSearchParams();
  const warningId = params.get('warningId') ?? '';
  const navigate = useNavigate();
  const [outcome, setOutcome] = useState('window_opened');
  const [owner, setOwner] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      await decisionsService.createDecision(warningId, { outcome, owner, reason });
      navigate('/decisions');
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  }

  return (
    <section>
      <PageHeader title="Record decision" subtitle={`Warning ${warningId}`} />
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: '0.75rem', maxWidth: 420 }}>
        <label>
          Outcome
          <select value={outcome} onChange={(e) => setOutcome(e.target.value)}>
            <option value="window_opened">Window opened</option>
            <option value="deferred">Deferred</option>
            <option value="declined">Declined</option>
            <option value="mitigated_by_control">Mitigated by control</option>
          </select>
        </label>
        <label>
          Owner
          <input value={owner} onChange={(e) => setOwner(e.target.value)} required />
        </label>
        <label>
          Reason
          <textarea value={reason} onChange={(e) => setReason(e.target.value)} rows={3} />
        </label>
        {error ? <p role="alert">{error}</p> : null}
        <button type="submit">Save decision</button>
      </form>
    </section>
  );
}
