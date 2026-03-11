import { ScreenShell } from './ScreenShell';

export function StartMappingScreen() {
  return (
    <ScreenShell
      title="Start Mapping"
      subtitle="Check your GPS and begin collecting location details."
      nextPath="/address-input"
      nextLabel="Go to Address Input"
    >
      <div className="card">
        <p>Status: GPS signal strong</p>
        <p>Battery suggestion: 45%+ recommended</p>
      </div>
    </ScreenShell>
  );
}
