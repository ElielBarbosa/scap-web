import styles from "./styles.module.css";
function Button({ children, variante = "primary", ...rest }) {
  console.log(variante);
  return (
    <button className={styles[variante]} {...rest}>
      {children}
    </button>
  );
}

export default Button;
