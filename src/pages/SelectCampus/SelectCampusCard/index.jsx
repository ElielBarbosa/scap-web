import styles from "./styles.module.css";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";

function SelectCampusCard() {
  const { setMostrar } = useContext(UserContext);
  return (
    <li className={styles.campusCard}>
      <div className={styles.imgCampus}></div>
      <div className={styles.dataCampusWrapper}>
        <h5 className={styles.campusCardTitle}>IFS - Tobias Barreto</h5>
        <button
          className={styles.campusCardButton}
          onClick={() => setMostrar(true)}
        >
          Selecionar
        </button>
      </div>
    </li>
  );
}

export default SelectCampusCard;
