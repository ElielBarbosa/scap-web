import styles from "./styles.module.css";

import ObjectData from "../ObjectData";
import ObjectImage from "../ObjectImage";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ObjectContext } from "../../../contexts/ObjectContext";

function ObjectDetailsPage() {
  const { id } = useParams();
  const { getObjectDetailsById, objectDetailsById } = useContext(ObjectContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getObjectDetailsById(id);
      } catch (error) {
        console.error("Error fetching object details:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className={`${styles.objectContainer} container my-5 introAnimation`}>
      <ObjectImage urlImage={objectDetailsById?.object_image} />
      <ObjectData objectDetails={objectDetailsById} />
    </main>
  );
}

export default ObjectDetailsPage;
