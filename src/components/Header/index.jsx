import styles from "./styles.module.css";
import logo from "../../assets/images/logo-mobile.svg";

import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

function Header({ userLoged = false }) {
  return (
    <header className={`${styles.headerContainer} `}>
      <Link to="/">
        <img src={logo} alt="Logo da SCAP" className={styles.logoImage} />
      </Link>
      {userLoged ? (
        <ProfileHeader />
      ) : (
        <Link to="/" className="primary">
          Login/Registro
        </Link>
      )}
    </header>
  );
}

export default Header;
