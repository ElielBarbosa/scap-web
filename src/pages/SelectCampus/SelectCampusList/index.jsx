import SelectCampusCard from "../SelectCampusCard";
import styles from "./styles.module.css";

function SelectCampusList({ mostrar }) {
  return (
    <ul className={styles.campusListContainer}>
      <SelectCampusCard setMostrar={mostrar} />
      <SelectCampusCard setMostrar={mostrar} />
      <SelectCampusCard setMostrar={mostrar} />
      <SelectCampusCard setMostrar={mostrar} />
      <SelectCampusCard setMostrar={mostrar} />
      <SelectCampusCard setMostrar={mostrar} />
    </ul>
  );
}

export default SelectCampusList;
