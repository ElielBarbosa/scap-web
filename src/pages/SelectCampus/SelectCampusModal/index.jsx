import SelectCampusCard from "../SelectCampusCard";
import styles from "./styles.module.css";
import iconClose from "../../../assets/icons/close.svg";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

function SelectCampusForm() {
  const { mostrar, setMostrar, createNewUser } = useContext(UserContext);

  return (
    <div className={`${styles.campusModalContainer} opacityAnimation`}>
      <div className={`${styles.modalCampus} scaleAnimation`}>
        <div className={styles.wrapperButtonClose}>
          <button onClick={() => setMostrar(!mostrar)}>
            <img src={iconClose} alt="" srcset="" />
          </button>
        </div>
        <p className={styles.modalCampusMessage}>
          Você selecionou o campus IFS - Tobias Barreto, deseja confirmar?
        </p>
        <button
          onClick={() => {
            setMostrar(false);
            createNewUser();
          }}
          className={styles.modalConfirmButton}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}

export default SelectCampusForm;
