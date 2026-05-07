import styles from "./styles.module.css";

function Divisor({ children }) {
  return (
    <div className={styles.divisor}>
      <span className={styles.divisorSpan}>{children}</span>
    </div>
  );
}

export default Divisor;
