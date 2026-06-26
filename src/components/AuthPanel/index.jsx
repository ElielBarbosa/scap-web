import styles from "./styles.module.css";
function AuthPanel({ title, message }) {
  return (
    <div className={styles.authPanelContainer}>
      <h2 className={styles.authPanelTitle}>{title}</h2>
      <p className={styles.authPanelMessage}>{message}</p>
    </div>
  );
}

export default AuthPanel;
