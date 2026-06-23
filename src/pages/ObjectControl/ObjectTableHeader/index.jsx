import ObjectControlHeader from "../ObjectControlHeader";
import styles from "./styles.module.css";

function ObjectTableHeader() {
  return (
    <header className={`${styles.tableHeader}`}>
      <span className={`${styles.cellTitle} ${styles.imgCellTitle}`}>
        Imagem
      </span>
      <span className={`${styles.cellTitle}`}>Nome</span>
      <span className={`${styles.cellTitle}`}>Status</span>
      <span className={`${styles.cellTitle}`}>Registrado</span>
      <span className={`${styles.cellTitle}`}>Opções</span>
    </header>
  );
}

export default ObjectTableHeader;
