import SelectCampusCard from "../SelectCampusCard";
import styles from "./styles.module.css";

function SelectCampusList() {
  const campus = [
    { id: 1, campusName: "IFS - Tobias Barreto", address: "Rua filomeno dias" },
    { id: 2, campusName: "IFS - Lagarto", address: "Rua São Augustus" },
    { id: 3, campusName: "IFS - Aracaju", address: "Av. João Valeriano" },
    { id: 3, campusName: "IFS - São Cristovão", address: "Av. João Valeriano" },
    { id: 3, campusName: "IFS - Itabaianinha", address: "Av. João Valeriano" },
    { id: 3, campusName: "IFS - Tomar do Geru", address: "Av. João Valeriano" },
  ];
  return (
    <ul className={styles.campusListContainer}>
      {campus.map((campus) => (
        <SelectCampusCard
          address={campus.address}
          id={campus.id}
          campusName={campus.campusName}
        />
      ))}
    </ul>
  );
}

export default SelectCampusList;
