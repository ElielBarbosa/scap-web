import styles from "./styles.module.css";
function Button({ children, variant = "primary", ...rest }) {
  return (
    <button className={styles[variant]} {...rest}>
      {children}
    </button>
  );
}

export default Button;
