import styles from "./styles.module.css";

import ObjectCard from "../ObjectCard";


function MyRequestSection() {
  return (
    <section className={`${styles.myRequestsContainer} my-3 container`}>
      <h5 className="titleSection">Minhas Requisições</h5>
      <div className={styles.slideObjects}>
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
      </div>
    </section>
  );
}

export default MyRequestSection;
