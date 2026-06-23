import styles from "./styles.module.css";
import DashboardOption from "../DashBoardOpiton";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../api/api";
import { UserContext } from "../../../contexts/UserContext";

function DashboardPage() {
  const { userData } = useContext(UserContext);

  const [objects, setObjects] = useState(0);
  const [campusData, setCampusData] = useState({});
  useEffect(() => {
    async function handdleObjects() {
      if (userData.campusId) {
        try {
          const objectCampus = await api.get(
            `/object/campus/${userData.campusId}`,
          );
          setObjects(objectCampus.data.length);
          console.log(objectCampus.data);

          const campusData = await api.get(`/campus/${userData.campusId}`);
          setCampusData(campusData.data);
        } catch (error) {
          console.error("Error fetching objects:", error);
        }
      }
    }
    handdleObjects();
  }, [userData, objects]);

  return (
    <>
      <div className="mt-5 container introAnimation">
        <h4 className={`${styles.dashboardTitle} introAnimation`}>
          Gerenciamento, campus IFS {campusData.city}
        </h4>
        <div className={`${styles.dashboardContainer} container mt-2`}>
          <DashboardOption
            title="Objetos em guarda "
            link="/objects-control"
            number={objects}
            className="bg-green"
          />
          <DashboardOption
            title="Solicitações de retirada"
            link=""
            className="bg-yellow"
          />
          <DashboardOption
            title="Objetos Próximos da Expiração"
            link=""
            className="bg-red"
          />
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
