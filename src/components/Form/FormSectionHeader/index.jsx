import styles from "./styles.module.css";
import { UserContext } from "../../../contexts/UserContext";

function FormSectionHeader({ title, paragraph, error }) {
  return (
    <div key={title} className={styles.formSectionHeaderContainer}>
      <h1 className={`${styles.formHeaderTitle} title-gradient`}>{title}</h1>
      <p className={styles.formHeaderParagraph}>{paragraph}</p>
      {error && (
        <span className={`${styles.formHeaderError} toBottomAnimation`}>
          {error}
        </span>
      )}
    </div>
  );
}

export default FormSectionHeader;
