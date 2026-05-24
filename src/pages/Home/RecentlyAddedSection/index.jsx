import styles from "./styles.module.css";

import ObjectCard from "../ObjectCard";
import { ObjectContext } from "../../../contexts/ObjectContext";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";

function RecentlyAddedSection() {
  const { getObjectsRecentlyAdded, objectsRecentlyAdded } =
    useContext(ObjectContext);
  const { userData, userLoged } = useContext(UserContext);
  //const [objects, setObjects] = useState([]);

  useEffect(() => {
    async function handdleObjects() {
      if (userLoged && userData.campusId) {
        await getObjectsRecentlyAdded(userData.campusId);
      }
      await getObjectsRecentlyAdded(2);
    }
    handdleObjects();
  }, []);

  return (
    <section className={`${styles.myRequestsContainer} my-3 container`}>
      <h5 className="titleSection">Registrados Recentemente</h5>
      <div className={styles.slideObjects}>
        {objectsRecentlyAdded.map((object) => {
          //console.log(object);
          return <ObjectCard object={object} key={object.id} />;
        })}
      </div>
    </section>
  );
}

export default RecentlyAddedSection;
