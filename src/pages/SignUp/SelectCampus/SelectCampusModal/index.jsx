import SelectCampusCard from "../SelectCampusCard";
import styles from "./styles.module.css";

import checkIcon from "../../../../assets/icons/check.svg";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";

function SelectCampusForm() {
  const { setMostrar, createNewUser } = useContext(UserContext);

  return (
    <div className={`${styles.campusModalContainer} opacityAnimation`}>
      <div className={`${styles.modalCampus} scaleAnimation`}>
        <img src={checkIcon} alt="Check Icon" className={styles.checkIcon} />
        <h5>Confirmação de Seleção</h5>
        <p className={styles.modalCampusMessage}>
          Você selecionou o campus IFS - Tobias Barreto, deseja confirmar?
        </p>
        <div className={`${styles.modalButtonContainer} mt-2`}>
          <button
            onClick={() => {
              setMostrar(false);
            }}
            className={`${styles.modalCancelButton} secondary`}
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              setMostrar(false);
              createNewUser();
            }}
            className={`${styles.modalConfirmButton} primary`}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectCampusForm;
