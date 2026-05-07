import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import iconSearch from "../../../assets/icons/search.svg";
import Category from "../Category";

function SearchSection() {
  return (
    <section className={`${styles.searchSection} container`}>
      <h5 className={`${styles.sectionTitle}`}>Buscar por categorias</h5>
      <div className={`${styles.searchInputContainer} `}>
        <input
          type="text"
          name=""
          placeholder="Pesquisar objeto"
          id=""
          className={`${styles.searchInput}`}
        />
        <img src={iconSearch} alt="" srcset="" className={styles.iconsSearch} />
      </div>
      <div className={styles.categoryContainer}>
        <Category>Eletrônica</Category>
        <Category>Material Escolar</Category>
        <Category>Documentos</Category>
        <Category>Acessorios Pessoais</Category>
        <Category>Vestuário</Category>
        <Category>Artigos de Lazer</Category>
      </div>
    </section>
  );
}

export default SearchSection;
