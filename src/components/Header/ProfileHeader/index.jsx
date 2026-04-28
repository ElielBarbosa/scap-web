import styles from "./styles.module.css";
import iconProfile from "../../../assets/icons/user.svg";

function ProfileHeader() {
  return (
    <span className={`${styles.profile}`}>
      <span className={`${styles.profileImage}`}>
        <img src={iconProfile} alt="" srcset="" />
      </span>
      <h6 className={`${styles.userNameProfile}`}>Eliel</h6>
    </span>
  );
}

export default ProfileHeader;
