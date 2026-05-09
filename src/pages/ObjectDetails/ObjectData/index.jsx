import Button from "../../../components/Form/Button";
import Category from "../../Home/Category";
import styles from "./styles.module.css";

function ObjectData() {
  return (
    <section className={`${styles.objectDetailsWrapper}`}>
      <h3>Celular Motorola</h3>
      <div className={styles.categories}>
        <Category>Eletronicos</Category>
        <Category>Smartphone</Category>
      </div>

      <div className={`${styles.details}`}>
        <div>
          <b>Registrado em: </b>
          <span>26 out, 2026</span>
          <br />
          <b>Local: </b>
          <span>Estacionamento</span>
        </div>

        <div className={`${styles.descriptionObject}`}>
          <span>Descrição</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>
      </div>
      <Button variant="primary">Solicitar Retirada</Button>
    </section>
  );
}

export default ObjectData;
