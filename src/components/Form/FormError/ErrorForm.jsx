import styles from "./styles.module.css";

function ErrorForm({ error }) {
  if (!error) {
    return null;
  }
  return <span className={styles.errorSpan}>{error}</span>;
}

export default ErrorForm;
