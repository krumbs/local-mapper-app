import { ScreenShell } from './ScreenShell';

export function LoginScreen() {
  return (
    <ScreenShell title="Login" subtitle="Sign in quickly before heading out." nextPath="/home" nextLabel="Continue to Home">
      <label className="field">
        Phone Number
        <input type="tel" placeholder="e.g. +1 555 000 000" />
      </label>
      <label className="field">
        One-time Code
        <input type="text" placeholder="Enter 6-digit code" />
      </label>
    </ScreenShell>
  );
}
