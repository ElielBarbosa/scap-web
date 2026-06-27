import SelectCampusCard from "../SelectCampusCard";
import styles from "./styles.module.css";

import mapPinIcon from "../../../../assets/icons/map-pin.svg";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";

function SelectCampusForm() {
  const { setMostrar, createNewUser } = useContext(UserContext);

  return (
    <div className={`${styles.campusModalContainer} opacityAnimation`}>
      <div className={`${styles.modalCampus} scaleAnimation`}>
        <img
          src={mapPinIcon}
          alt="Map Pin Icon"
          className={styles.mapPinIcon}
        />
        <h5 className={`${styles.modalCampusTitle}`}>Confirmação de Seleção</h5>
        <p className={styles.modalCampusMessage}>
          Esta ação removerá o objeto do sistema e poderá impactar solicitações
          associadas a ele. O histórico relacionado poderá não ficar mais
          disponível para consulta.
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
