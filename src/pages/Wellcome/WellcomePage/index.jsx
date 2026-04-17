import styles from "./styles.module.css";
import logo from "../../../assets/images/logo-mobile.png";
import Button from "../../../components/Button";
import Divisor from "../Divisor";

function WellcomePage() {
  return (
    <>
      <div className={`${styles.wellcomeContainer} container introAnimation`}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
          <span className={styles.logoName}>SCAP</span>
        </div>

        <div className={styles.wellcomeWrapper}>
          <h2
            className={`${styles.wellcomeTitle} subtitle-gradient toTopAnimation`}
          >
            Olá, seja bem-vindo
          </h2>
          <p className={`${styles.wellcomeMessager} toTopAnimation`}>
            Ao <b>SCAP</b>, o Sistema de Controle de Achados e Perdidos
          </p>

          <div className={styles.wellcomeButtonContainer}>
            <Button variante="primary">Entrar</Button>
            <Divisor />
            <Button variante="secondary">Criar nova conta</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WellcomePage;
