import { ScreenShell } from './ScreenShell';

export function HomeScreen() {
  return (
    <ScreenShell title="Home" subtitle="Ready to map nearby addresses?" nextPath="/start-mapping" nextLabel="Start a Mapping Session">
      <div className="card">
        <p>Assigned zone: Downtown East</p>
        <p>Target today: 25 addresses</p>
      </div>
    </ScreenShell>
  );
}
