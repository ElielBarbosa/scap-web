import styles from "./styles.module.css";
function Button({ children, variant = "primary", ...rest }) {
  console.log(variant);
  return (
    <button className={styles[variant]} {...rest}>
      {children}
    </button>
  );
}

export default Button;
