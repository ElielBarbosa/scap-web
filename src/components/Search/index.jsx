import styles from "./styles.module.css";
import iconSearch from "../../assets/icons/search.svg";

function Search({ placeholder }) {
  return (
    <div className={`${styles.inputSearchWrapper}`}>
      <input
        type="text"
        placeholder={placeholder}
        name="search"
        className={`${styles.inputSearch}`}
      />
      <img src={iconSearch} alt="" className={styles.iconSearch} srcset="" />
    </div>
  );
}

export default Search;
