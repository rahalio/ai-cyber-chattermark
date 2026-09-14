import styles from './PageHeader.module.css';

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className={styles.wrap}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle ? <p className={styles.sub}>{subtitle}</p> : null}
    </header>
  );
}
