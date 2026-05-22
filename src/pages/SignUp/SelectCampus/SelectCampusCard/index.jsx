import { UserContext } from "../../../../contexts/UserContext";
import styles from "./styles.module.css";

import { useContext } from "react";

function SelectCampusCard({ id, campusName, address }) {
  const { registerData, setRegisterData, setMostrar } = useContext(UserContext);

  //só para ver se os state do campsu selecionado muda
  // useEffect(() => {
  //   console.log(registerData);
  // }, [registerData]);
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
        <button onClick={selectCampus} className={styles.campusCardButton}>
          Selecionar
        </button>
      </div>
    </li>
  );
}

export default SelectCampusCard;
