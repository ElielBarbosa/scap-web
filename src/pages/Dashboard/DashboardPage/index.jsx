import styles from "./styles.module.css";
import DashboardOption from "../DashBoardOpiton";

function DashboardPage() {
  return (
    <div className={`${styles.dashboardContainer} container mt-5`}>
      <DashboardOption title="Objetos" link="/objects-control" />
      <DashboardOption title="" link="" />
      <DashboardOption title="" link="" />
      <DashboardOption title="" link="" />
    </div>
  );
}

export default DashboardPage;
