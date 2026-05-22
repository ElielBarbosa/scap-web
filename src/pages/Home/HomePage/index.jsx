//import styles from "styles.module.css";
import HeroSection from "../HeroSection";
import MyRequestSection from "../MyRequestsSection";
import RecentlyAddedSection from "../RecentlyAddedSection";
import SearchSection from "../SearchSection";

import Button from "../../../components/Form/Button";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

//icons para pagianção
//import iconChevronLeft from "../../../assets/icons/chevron-left.svg";
//import iconChevronRigth from "../../../assets/icons/chevron-rigth.svg";

function HomePage() {
  const { userLoged, userData } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {}, [userData, navigate]);
  return (
    <>
      <HeroSection />
      <SearchSection />
      {userLoged ? <MyRequestSection /> : null}
      <RecentlyAddedSection />

      {/* <div className="w-100">
        <Button className="p-1">
          <img src={iconChevronLeft} alt="" srcset="" />
        </Button>
        <span>1/100</span>
        <Button className="p-1">
          <img src={iconChevronRigth} alt="" srcset="" />
        </Button>
      </div> */}
    </>
  );
}

export default HomePage;
