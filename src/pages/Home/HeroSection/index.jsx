import Button from "../../../components/Form/Button";
import ObjectCard from "../ObjectCard";
import styles from "./styles.module.css";
import arrowButton from "../../../assets/icons/cta-button-arrow.svg";

function HeroSection() {
  return (
    <div className={`${styles.heroSectionContainer} container mt-5 mb-3 p-2`}>
      <div className={styles.heroSectionContent}>
        <h2 className={styles.heroTitle}>
          <span className={styles.spanTitle}>Perdeu</span> algo e não encontrou?
        </h2>

        <Button variant="secondary">
          Abrir chamada
          <img src={arrowButton} alt="" srcset="" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
