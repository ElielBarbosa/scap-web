import styles from "./styles.module.css";
import arrowButton from "../../../assets/icons/arrow_button.svg";
import { Link } from "react-router-dom";

function DashboardOption({ title, link }) {
  return (
    <div className={styles.dashboardOption}>
      <div className={`${styles.optionTitleWrapper} mb-3`}>
        <h6 className={styles.optionTitle}>{title}</h6>
        <Link to={link}>
          <button className={`${styles.optionButton} `}>
            <img src={arrowButton} alt="" srcset="" />
          </button>
        </Link>
      </div>
      <span className={`${styles.optionValue} mt-1 mb-1`}>250</span>
    </div>
  );
}

export default DashboardOption;
