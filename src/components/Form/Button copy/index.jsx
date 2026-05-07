import styles from "./styles.module.css";
function Button({ children, fullWidth, variant = "primary", ...rest }) {
  const buttonClass = [styles[variant], fullWidth ? styles.fullWidth : ""]
    .join(" ")
    .trim();

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
}

export default Button;
