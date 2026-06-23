import styles from "./styles.module.css";
import iconProfile from "../../../assets/icons/user.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Link } from "react-router-dom";

import bellIcon from "../../../assets/icons/bell.svg";
import idBedgeIcon from "../../../assets/icons/id-badge.svg";
import logoutIcon from "../../../assets/icons/logout.svg";

function ProfileHeader({ username }) {
  const { userLogout, userData } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <span onClick={toggleMenu} className={`${styles.profile} toTopAnimation`}>
      <span className={`${styles.profileImage}`}>
        <img src={iconProfile} alt="" srcset="" />
      </span>
      <span>
        <h6 className={`${styles.userNameProfile}`}>{username}</h6>
        {userData.userType === 2 ? (
          <span className={styles.userRole}>Admin</span>
        ) : (
          <span className={styles.userRole}>User</span>
        )}
      </span>

      <div
        className={`${styles.menu} ${isOpen ? styles.active : ""}`}
        onMouseLeave={closeMenu}
      >
        <Link to="/">
          <div className={styles.menuItem}>
            {" "}
            <img src={bellIcon} alt="" />
            Notificações
          </div>
        </Link>
        <Link to="/about">
          <div className={styles.menuItem}>
            {" "}
            <img src={idBedgeIcon} alt="" />
            Meus dados
          </div>
        </Link>
        <div
          className={styles.menuItem}
          onClick={userLogout}
          style={{ color: "#AC0001" }}
        >
          <img src={logoutIcon} alt="" />
          Sair
        </div>
      </div>
    </span>
  );
}

export default ProfileHeader;
