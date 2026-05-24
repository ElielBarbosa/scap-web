import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Button from "../../../components/Form/Button";

function ObjectCard() {
  return (
    <>
      <div className={styles.objectCard}>
        <div>
          <img
            src="http://localhost:3000/uploads/1779560834065-550659387.webp"
            alt=""
            className={styles.objectCardImage}
          />
          <div className={styles.nameWrapper}>
            <h6 className={styles.nameObject}>Object Name</h6>
            <span className={styles.status}>● Achado</span>
          </div>
          <span className={styles.date}>26 jan, 2026</span>
        </div>
        <Link to="/object-details">
          <Button variant="primary" fullWidth={true}>
            Ver detalhes
          </Button>
        </Link>
      </div>
    </>
  );
}

export default ObjectCard;
