//import styles from "styles.module.css";
import HeroSection from "../HeroSection";
import MyRequestSection from "../MyRequestsSection";
import RecentlyAddedSection from "../RecentlyAddedSection";
import SearchSection from "../SearchSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <MyRequestSection />
      <RecentlyAddedSection />
    </>
  );
}

export default HomePage;
