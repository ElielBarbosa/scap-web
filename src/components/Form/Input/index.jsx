import styles from "./styles.module.css";

function Input({
  iconUrl,
  type,
  name,
  value,
  placehoder,
  error,
  onChange,
  ...rest
}) {
  return (
    <>
      <div className={styles.inputWrapper}>
        <img src={iconUrl} alt="" srcset="" className={styles.iconInput} />
        <input
          name={name}
          id={name}
          placeholder={placehoder}
          className={styles.input}
          type={type}
          onChange={onChange}
          value={value}
          {...rest}
        />
      </div>
      {error && <span className={styles.errorSpan}>{error}</span>}
    </>
  );
}

export default Input;
