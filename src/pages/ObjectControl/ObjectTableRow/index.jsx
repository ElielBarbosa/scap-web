import styles from "./styles.module.css";
import editIcon from "../../../assets/icons/edit-white.svg";
import trashIcon from "../../../assets/icons/trash-white.svg";

function ObjectTableRow({ object, key }) {
  const urlBase = "http://localhost:3000/uploads/";
  return (
    <div className={styles.rowContainer} key={key}>
      <div className={styles.row}>
        <div className={styles.imgCell}>
          <img
            src={`${urlBase}${object.object_image}`}
            alt={object.name_objetct}
          />
        </div>
        <span className={styles.cell}>{object.name_objetct}</span>
        <span className={styles.cell}>{object.status}</span>
        <span className={styles.cell}>{object?.create_at?.slice(0, 10)}</span>
        <span className={`${styles.cell} ${styles.actionsCell}`}>
          <button className={styles.editButton}>
            <img src={editIcon} alt="Edit" />
          </button>
          <button className={styles.deleteButton}>
            <img src={trashIcon} alt="Delete" />
          </button>
        </span>
      </div>
    </div>
  );
}

export default ObjectTableRow;
