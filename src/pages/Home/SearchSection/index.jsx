import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import Category from "../Category";
import Search from "../../../components/Search";
import { useEffect, useState } from "react";
import { api } from "../../../api/api";

function SearchSection() {
  const [category, getCategory] = useState([]);

  useEffect(() => {
    async function handdleCategorys() {
      const categoryData = await api.get("/category", {});
      getCategory(categoryData.data);
    }
    handdleCategorys();
  }, []);
  return (
    <section className={`${styles.searchSection} container`}>
      <h5 className={`${styles.sectionTitle}`}>Buscar por categorias</h5>
      <Search placeholder="Pesquisar objeto" />

      <div className={styles.categoryContainer}>
        {category.map((cat) => (
          <Category key={cat.id}>{cat.name_category}</Category>
        ))}
      </div>
    </section>
  );
}

export default SearchSection;
