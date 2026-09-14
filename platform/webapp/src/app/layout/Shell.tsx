import { NavLink, Outlet } from 'react-router-dom';
import styles from './Shell.module.css';

const nav = [
  { to: '/', label: 'Shortlist', end: true },
  { to: '/warnings', label: 'Warnings' },
  { to: '/decisions', label: 'Decisions' },
  { to: '/sources', label: 'Sources' },
  { to: '/estate', label: 'Estate' },
  { to: '/accuracy', label: 'Accuracy' },
  { to: '/timelines', label: 'Timelines' },
  { to: '/governance', label: 'Policy' },
];

export function Shell() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.mark}>Chattermark</span>
          <span className={styles.tag}>early warning · capacity first</span>
        </div>
        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <div className={styles.body}>
        <Outlet />
      </div>
    </div>
  );
}
