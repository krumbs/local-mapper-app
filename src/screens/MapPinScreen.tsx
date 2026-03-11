import { ScreenShell } from './ScreenShell';

export function MapPinScreen() {
  return (
    <ScreenShell title="Map / Pin" subtitle="Place the pin on the entrance for accurate routing." nextPath="/landmark-notes" nextLabel="Add Landmark Notes">
      <div className="map-placeholder" aria-label="Map placeholder">
        <span>Map preview area</span>
        <button type="button" className="button secondary">
          Drop Pin at Current GPS
        </button>
      </div>
    </ScreenShell>
  );
}
