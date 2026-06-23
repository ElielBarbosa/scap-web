import ObjectControlHeader from "../ObjectControlHeader";

import ObjectTable from "../ObjectTable";
import styles from "./styles.module.css";

function ObjectControlPage() {
  return (
    <main className={`${styles.objectControlPageContainer} introAnimation`}>
      <ObjectControlHeader className="mt-5 container" />
      <ObjectTable className="container mt-2" />
    </main>
  );
}

export default ObjectControlPage;
