import { useContext, useEffect, useState } from "react";
import ObjectTableHeader from "../ObjectTableHeader";
import ObjectTableRow from "../ObjectTableRow";
import styles from "./styles.module.css";
import { api } from "../../../api/api";
import { UserContext } from "../../../contexts/UserContext";

function ObjectTable({ className }) {
  const [objects, setObjects] = useState([]);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    async function handdleObjects() {
      try {
        console.log("User Data:", userData);
        if (userData.campusId) {
          const response = await api(`/object/campus/${userData.campusId}`);
          setObjects(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching objects:", error);
      }
    }
    handdleObjects();
  }, [userData]);
  return (
    <section className={`${styles.tableObjectsContainer} ${className}`}>
      <ObjectTableHeader />
      {objects.map((object) => {
        return <ObjectTableRow object={object} key={object.id} />;
      })}
    </section>
  );
}

export default ObjectTable;
