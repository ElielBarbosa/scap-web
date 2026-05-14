import styles from "./styles.module.css";

import iconObject from "../../../assets/icons/object.svg";

function RegisterObjectHeader() {
  return (
    <header className={`${styles.registerObjectHeader} my-4`}>
      <img className={styles.iconPage} src={iconObject} alt="" srcset="" />
      <h3 className={styles.pageTitle}>Registrar Objeto</h3>
    </header>
  );
}

export default RegisterObjectHeader;
