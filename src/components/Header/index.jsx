import styles from "./styles.module.css";
import logo from "../../assets/images/logo-mobile.svg";

import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

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
          <Link to="/" className="primary">
            Entra
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
