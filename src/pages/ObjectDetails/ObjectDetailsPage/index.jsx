import styles from "./styles.module.css";

import ObjectData from "../ObjectData";
import ObjectImage from "../ObjectImage";

function ObjectDetailsPage() {
  return (
    <main className={`${styles.objectContainer} container my-5`}>
      <ObjectImage />
      <ObjectData />
    </main>
  );
}

export default ObjectDetailsPage;
