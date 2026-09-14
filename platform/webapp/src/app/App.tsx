import { Route, Routes } from 'react-router-dom';
import { Shell } from './layout/Shell';
import { ShortlistPage } from './pages/ShortlistPage';
import { WarningsPage } from './pages/WarningsPage';
import { WarningDetailPage } from './pages/WarningDetailPage';
import { DecisionsPage } from './pages/DecisionsPage';
import { DecisionCapturePage } from './pages/DecisionCapturePage';
import { SourcesPage } from './pages/SourcesPage';
import { EstatePage } from './pages/EstatePage';
import { AccuracyPage } from './pages/AccuracyPage';
import { TimelinesPage } from './pages/TimelinesPage';
import { GovernancePage } from './pages/GovernancePage';

export function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<ShortlistPage />} />
        <Route path="warnings" element={<WarningsPage />} />
        <Route path="warnings/:warningId" element={<WarningDetailPage />} />
        <Route path="decisions" element={<DecisionsPage />} />
        <Route path="decisions/new" element={<DecisionCapturePage />} />
        <Route path="sources" element={<SourcesPage />} />
        <Route path="estate" element={<EstatePage />} />
        <Route path="accuracy" element={<AccuracyPage />} />
        <Route path="timelines" element={<TimelinesPage />} />
        <Route path="governance" element={<GovernancePage />} />
      </Route>
    </Routes>
  );
}
