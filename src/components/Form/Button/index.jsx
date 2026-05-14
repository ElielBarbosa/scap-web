import styles from "./styles.module.css";
function Button({
  children,
  fullWidth,
  className,
  variant = "primary",
  ...rest
}) {
  const buttonClass = [styles[variant], fullWidth ? styles.fullWidth : ""]
    .join(" ")
    .trim();

  return (
    <button className={`${buttonClass} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
