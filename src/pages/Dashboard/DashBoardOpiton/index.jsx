import styles from "./styles.module.css";
import arrowButton from "../../../assets/icons/arrow_button.svg";
import { Link } from "react-router-dom";

function DashboardOption({ title, link, number, className }) {
  return (
    <div className={`${styles.dashboardOption} introAnimation ${className}`}>
      <div className={`${styles.optionTitleWrapper} mb-1`}>
        <h5 className={styles.optionTitle}>{title}</h5>
        <Link to={link}>
          <button className={`${styles.optionButton} `}>
            <img src={arrowButton} alt="" srcset="" />
          </button>
        </Link>
      </div>
      <span className={`${styles.optionValue} mt-1 mb-1`}>{number}</span>
    </div>
  );
}

export default DashboardOption;
