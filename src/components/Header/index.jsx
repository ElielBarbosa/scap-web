import styles from "./styles.module.css";
import logo from "../../assets/images/logo-mobile.svg";

import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import Button from "../Form/Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Header() {
  const { userLoged, userData } = useContext(UserContext);
  //console.log(userData);
  return (
    <header className={`${styles.headerContainer}`}>
      <div className={`${styles.headerContent}`}>
        <Link to="/">
          <img src={logo} alt="Logo da SCAP" className={styles.logoImage} />
        </Link>

        {userLoged ? (
          <ProfileHeader username={userData.username} />
        ) : (
          <Link to="/signIn" className={styles.signInButton}>
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
