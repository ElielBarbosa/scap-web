import styles from "./styles.module.css";
import logo from "../../../assets/images/logo-mobile.svg";

import Divisor from "../Divisor";
import Button from "../../../components/Form/Button";
import { Link } from "react-router-dom";

function WellcomePage() {
  return (
    <>
      <div className={`${styles.wellcomeContainer} container introAnimation`}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
          <span className={styles.logoName}>SCAP</span>
        </div>

        <div className={styles.wellcomeWrapper}>
          <div className={`${styles.a} toTopAnimation`}>
            <h2 className={`${styles.wellcomeTitle} subtitle-gradient `}>
              Olá, seja bem-vindo
            </h2>
            <p className={`${styles.wellcomeMessager}`}>
              Ao <b>SCAP</b>, o Sistema de Controle de Achados e Perdidos
            </p>
          </div>

          <div className={styles.wellcomeButtonContainer}>
            <Link to="/signIn">
              <Button variant="primary">Entrar</Button>
            </Link>
            <Divisor />
            <Link to="/register">
              <Button variant="secondary">Criar nova conta</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WellcomePage;
