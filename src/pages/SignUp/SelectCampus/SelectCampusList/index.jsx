import { useEffect, useState } from "react";
import SelectCampusCard from "../SelectCampusCard";
import styles from "./styles.module.css";
import { api } from "../../../../api/api";

function SelectCampusList() {
  const [campus, setCampus] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCampus() {
      try {
        const response = await api.get("campus");
        setCampus(response.data);
        console.log(campus);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching campus data:", error);
        setLoading(false);
      }
    }
    fetchCampus();
  }, [loading]);
  return (
    <ul className={styles.campusListContainer}>
      {campus.map((campus) => (
        <SelectCampusCard
          address={campus.address}
          city={campus.city}
          id={campus.id}
          campusName={campus.campusName}
        />
      ))}
    </ul>
  );
}

export default SelectCampusList;
