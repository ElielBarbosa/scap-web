
import styles from "./styles.module.css";

function Category({children}) {
  return (
    <span className={styles.category}>{children}</span>
  );
}

export default Category;
