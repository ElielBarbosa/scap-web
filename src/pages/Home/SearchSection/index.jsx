import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import Category from "../Category";
import Search from "../../../components/Search";

function SearchSection() {
  return (
    <section className={`${styles.searchSection} container`}>
      <h5 className={`${styles.sectionTitle}`}>Buscar por categorias</h5>
      <Search placeholder="Pesquisar objeto" />

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
