import { ScreenShell } from './ScreenShell';

export function AddressInputScreen() {
  return (
    <ScreenShell title="Address Input" subtitle="Capture street address or nearest intersection." nextPath="/map-pin" nextLabel="Open Map & Drop Pin">
      <label className="field">
        Street / Landmark
        <input type="text" placeholder="123 Main St or Near Blue Shop" />
      </label>
      <label className="field">
        Unit / Notes
        <input type="text" placeholder="Apt, floor, gate details" />
      </label>
    </ScreenShell>
  );
}
