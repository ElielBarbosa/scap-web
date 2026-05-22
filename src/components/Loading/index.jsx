import styles from "./style.module.css";
import iconLoading from "../../assets/icons/loading.svg";

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <img src={iconLoading} alt="" srcset="" className={styles.iconLoading} />
    </div>
  );
}

export default Loading;
