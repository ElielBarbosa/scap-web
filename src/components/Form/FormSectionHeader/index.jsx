import styles from "./styles.module.css";
import { UserContext } from "../../../contexts/UserContext";
import logoType from "../../../assets/images/logotype.svg";

function FormSectionHeader({ title, paragraph, error }) {
  return (
    <div key={title} className={`${styles.formSectionHeaderContainer}`}>
      <img src={logoType} alt="Logotype" className={styles.logotype} />
      <h1 className={`${styles.formHeaderTitle} title-gradient mt-2`}>
        {title}
      </h1>
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
