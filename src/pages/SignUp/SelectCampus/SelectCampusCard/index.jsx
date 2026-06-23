import { UserContext } from "../../../../contexts/UserContext";
import styles from "./styles.module.css";

import { useContext } from "react";

function SelectCampusCard({ id, campusName, city, address }) {
  const { registerData, setRegisterData, setMostrar } = useContext(UserContext);

  const selectCampus = (event) => {
    const id = Number(event.target.parentElement.getAttribute("campusId"));
    setRegisterData({ ...registerData, campusId: id });

    setMostrar(true);
  };

  return (
    <li className={styles.campusCard}>
      <div className={styles.imgCampus}></div>
      <div className={styles.dataCampusWrapper} campusId={id}>
        <h5 className={styles.campusCardTitle}>{campusName}</h5>
        <span className={styles.enderecoCampus}>{address}</span>
        <span className={styles.enderecoCampus}>{city}</span>
        <button onClick={selectCampus} className={styles.campusCardButton}>
          Selecionar
        </button>
      </div>
    </li>
  );
}

export default SelectCampusCard;
