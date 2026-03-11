import { ScreenShell } from './ScreenShell';

export function LandmarkNotesScreen() {
  return (
    <ScreenShell title="Landmark Notes" subtitle="Describe easy-to-spot cues for future visits." nextPath="/success" nextLabel="Save Mapping Entry">
      <label className="field">
        Landmark Details
        <textarea rows={4} placeholder="Red gate, next to water tank, opposite school" />
      </label>
    </ScreenShell>
  );
}
