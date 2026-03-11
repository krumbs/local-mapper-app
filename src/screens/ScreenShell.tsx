import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ScreenShellProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
  nextPath?: string;
  nextLabel?: string;
};

const navItems = [
  { label: 'Login', path: '/login' },
  { label: 'Home', path: '/home' },
  { label: 'Start', path: '/start-mapping' },
  { label: 'Address', path: '/address-input' },
  { label: 'Map/Pin', path: '/map-pin' },
  { label: 'Notes', path: '/landmark-notes' },
  { label: 'Success', path: '/success' },
  { label: 'Profile', path: '/profile-stats' },
];

export function ScreenShell({ title, subtitle, children, nextPath, nextLabel }: ScreenShellProps) {
  return (
    <main className="screen">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      {children}

      {nextPath && nextLabel ? (
        <Link className="button" to={nextPath}>
          {nextLabel}
        </Link>
      ) : null}

      <nav className="tab-grid" aria-label="Screen shortcuts">
        {navItems.map((item) => (
          <Link key={item.path} className="tab-link" to={item.path}>
            {item.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
