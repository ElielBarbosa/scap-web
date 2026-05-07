import styles from "./styles.module.css";
import logo from "../../assets/images/logo-mobile.svg";

import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import Button from "../Form/Button";

function Header({ userLoged = false }) {
  return (
    <header className={`${styles.headerContainer}`}>
      <div className={`${styles.headerContent} container`}>
        <Link to="/">
          <img src={logo} alt="Logo da SCAP" className={styles.logoImage} />
        </Link>
        {userLoged ? (
          <ProfileHeader />
        ) : (
          <Link to="/signIn">
            <Button variant="primary">Entrar</Button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
