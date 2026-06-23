import styles from "./styles.module.css";

import ObjectCard from "../ObjectCard";
import { api } from "../../../api/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

function MyRequestSection() {
  const { userData } = useContext(UserContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        if (!userData || !userData.id) {
          console.error("User data is not available");
          return;
        }
        const response = await api.get(`/request/user/${userData.id}`);
        setRequests(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [userData]);
  return (
    <section className={`${styles.myRequestsContainer} my-3 container`}>
      <h5 className="titleSection">Minhas Requisições</h5>
      <div className={styles.slideObjects}>
        {requests.map((request) => (
          <ObjectCard key={request.id} object={request} />
        ))}
      </div>
    </section>
  );
}

export default MyRequestSection;
