import { ScreenShell } from './ScreenShell';

export function ProfileStatsScreen() {
  return (
    <ScreenShell title="Profile / Stats" subtitle="Track your progress and contribution." nextPath="/start-mapping" nextLabel="Start New Mapping Session">
      <div className="card">
        <p>Name: Field Mapper A</p>
        <p>Total mapped: 312</p>
        <p>Today: 18</p>
      </div>
    </ScreenShell>
  );
}
