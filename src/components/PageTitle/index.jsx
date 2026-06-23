import styles from "./styles.module.css";

function PageTitle({ icon, title }) {
  return (
    <header className={styles.pageTitleContainer}>
      <img src={icon} alt="" srcset="" className={styles.pageTitleIcon} />
      <h2 className={styles.pageTitle}>{title}</h2>
    </header>
  );
}

export default PageTitle;
