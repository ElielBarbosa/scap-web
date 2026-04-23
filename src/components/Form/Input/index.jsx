import styles from "./styles.module.css";
import iconEye from "../../../assets/icons/eye.svg";
import iconEyeOff from "../../../assets/icons/eye-off.svg";
import { useState } from "react";

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
  const [seePassword, setSeePassword] = useState();

  return (
    <>
      <div className={`${styles.inputWrapper} ${error && styles.errorInput}`}>
        <img src={iconUrl} alt="" srcset="" className={styles.iconInput} />
        <input
          name={name}
          id={name}
          placeholder={placehoder}
          className={styles.input}
          type={
            type === "password" ? (seePassword ? "text" : "password") : type
          }
          onChange={onChange}
          value={value}
          {...rest}
        />
        {type === "password" && (
          <img
            onClick={() => setSeePassword(!seePassword)}
            src={seePassword ? iconEyeOff : iconEye}
            alt=""
            srcset=""
            className={styles.iconEye}
          />
        )}
      </div>
      {error && (
        <span className={`${styles.errorSpan} toBottomAnimation`}>{error}</span>
      )}
    </>
  );
}

export default Input;
