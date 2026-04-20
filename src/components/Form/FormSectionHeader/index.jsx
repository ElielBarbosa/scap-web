import styles from "./styles.module.css";

function FormSectionHeader({ title, paragraph, subtitle }) {
  return (
    <div key={title} className={styles.formSectionHeaderContainer}>
      <h1 className={`${styles.formHeaderTitle} title-gradient`}>{title}</h1>
      <p className={styles.formHeaderParagraph}>{paragraph}</p>
      <span className={styles.formHeaderSubtitle}>{subtitle}</span>
    </div>
  );
}

export default FormSectionHeader;
