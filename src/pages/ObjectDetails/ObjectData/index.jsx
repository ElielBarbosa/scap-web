import Button from "../../../components/Form/Button";
import Category from "../../Home/Category";
import styles from "./styles.module.css";

function ObjectData({ objectDetails }) {
  return (
    <section className={`${styles.objectDetailsWrapper}`}>
      <h3>{objectDetails?.name_objetct}</h3>
      <div className={styles.categories}>
        <Category>Eletronicos</Category>
        <Category>Smartphone</Category>
      </div>

      <div className={`${styles.details}`}>
        <div>
          <b>Registrado em: </b>
          <span>{objectDetails?.create_at}</span>
          <br />
          <b>Local: </b>
          <span>{objectDetails?.location_found}</span>
        </div>

        <div className={`${styles.descriptionObject}`}>
          <span>Descrição</span>
          <p>{objectDetails?.description}</p>
        </div>
      </div>
      <Button variant="primary">Solicitar Retirada</Button>
    </section>
  );
}

export default ObjectData;
