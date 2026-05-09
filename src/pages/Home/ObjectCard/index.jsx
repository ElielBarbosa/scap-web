import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Button from "../../../components/Form/Button";

function ObjectCard() {
  return (
    <>
      <div className={styles.objectCard}>
        <div>
          <img src="" alt="" className={styles.objectCardImage} />
          <div className={styles.nameWrapper}>
            <h6 className={styles.nameObject}>Object Name</h6>
            <span className={styles.status}>Achado</span>
          </div>
        </div>
        <Link to="/object">
          <Button variant="primary" fullWidth={true}>
            Ver detalhes
          </Button>
        </Link>
      </div>
    </>
  );
}

export default ObjectCard;
