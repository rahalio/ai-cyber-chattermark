import styles from './Disclaimer.module.css';

export function Disclaimer() {
  return (
    <p className={styles.strip} role="note">
      Absence of a warning is not evidence of low risk. Chattermark ranks what practitioners
      say — it does not certify safety.
    </p>
  );
}
