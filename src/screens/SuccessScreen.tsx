import { ScreenShell } from './ScreenShell';

export function SuccessScreen() {
  return (
    <ScreenShell title="Success" subtitle="Address was saved successfully." nextPath="/profile-stats" nextLabel="View Profile & Stats">
      <div className="card">
        <p>Saved just now</p>
        <p>Great work. Keep mapping nearby homes.</p>
      </div>
    </ScreenShell>
  );
}
