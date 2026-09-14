import { useParams, Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Disclaimer } from '../components/Disclaimer';

export function WarningDetailPage() {
  const { warningId } = useParams();
  return (
    <section>
      <PageHeader
        title={`Warning ${warningId}`}
        subtitle="Quoted language, named sources, dual score, and decision capture."
      />
      <Disclaimer />
      <p>
        Record a terminal decision:{' '}
        <Link to={`/decisions/new?warningId=${warningId}`}>Open / defer / decline</Link>
      </p>
    </section>
  );
}
