import styles from "./styles.module.css";
import iconProfile from "../../../assets/icons/user.svg";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

function ProfileHeader({ username, role }) {
  const { userLogout, setLoading } = useContext(UserContext);
  return (
    <span
      onClick={() => {
        setLoading(true);
        userLogout();
      }}
      className={`${styles.profile}`}
    >
      <span className={`${styles.profileImage}`}>
        <img src={iconProfile} alt="" srcset="" />
      </span>
      <h6 className={`${styles.userNameProfile}`}>{username}</h6>
      <span>{role}</span>
    </span>
  );
}

export default ProfileHeader;
