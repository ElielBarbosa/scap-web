import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Button from "../../../components/Form/Button";

function ObjectCard({ object }) {
  const urlBase = "http://localhost:3000/uploads/";
  //console.log(urlBase + object.object_image);
  return (
    <>
      <div className={styles.objectCard}>
        <div>
          <img
            src={`${urlBase}${object?.object_image ?? ""}`}
            alt=""
            className={styles.objectCardImage}
          />
          <div className={styles.nameWrapper}>
            <h6 className={styles.nameObject}>{object?.name_objetct}</h6>
            <span className={styles.status}>{object?.status}</span>
          </div>
          <span className={styles.date}>{object?.create_at?.slice(0, 10)}</span>
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
