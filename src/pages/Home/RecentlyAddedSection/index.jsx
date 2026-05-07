import styles from "./styles.module.css";

import ObjectCard from "../ObjectCard";


function RecentlyAddedSection() {
  return (
    <section className={`${styles.myRequestsContainer} my-3 container`}>
      <h5 className="titleSection">Registrados Recentemente</h5>
      <div className={styles.slideObjects}>
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
      </div>
    </section>
  );
}

export default RecentlyAddedSection;
