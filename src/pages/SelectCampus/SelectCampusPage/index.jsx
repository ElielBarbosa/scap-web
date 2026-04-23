import SelectCampusCard from "../SelectCampusCard";
import styles from "./styles.module.css";
import FormSectionHeader from "../../../components/Form/FormSectionHeader";
import SelectCampusList from "../SelectCampusList";
import SelectCampusModal from "../SelectCampusModal";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

function SelectCampusPage() {
  const { mostrar } = useContext(UserContext);

  return (
    <>
      <div
        className={`${styles.selectCampusContainer} container introAnimation`}
      >
        <FormSectionHeader
          title="Selecione o campus"
          subtitle="selecione seu campus IFS"
          paragraph=""
        />
        <SelectCampusList></SelectCampusList>
      </div>
      {mostrar && <SelectCampusModal />}
    </>
  );
}

export default SelectCampusPage;
