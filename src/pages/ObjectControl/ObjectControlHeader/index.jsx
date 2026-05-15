import styles from "./styles.module.css";

import iconObject from "../../../assets/icons/object.svg";
import iconPlus from "../../../assets/icons/plus.svg";
import Button from "../../../components/Form/Button";
import Search from "../../../components/Search";
import { Link } from "react-router-dom";
//import Search from "../../../components/Search";

function ObjectControlHeader({ className }) {
  return (
    <header className={`${styles.objectControlHeaderContainer} ${className}`}>
      <div className={styles.titleWrapper}>
        <img
          src={iconObject}
          alt=""
          srcset=""
          className={`${styles.iconObject}`}
        />
        <h4 className={`${styles.pageTitle}`}>Registrar Objeto</h4>
      </div>

      <div className={`${styles.searchWrapper}`}>
        <Link to="/register-object">
          <Button className={`${styles.btn}  primary`}>
            <img src={iconPlus} alt="" srcset="" />
            Registrar objeto
          </Button>
        </Link>
        <Search placeholder="Pesquisar objeto" />
      </div>
    </header>
  );
}

export default ObjectControlHeader;
