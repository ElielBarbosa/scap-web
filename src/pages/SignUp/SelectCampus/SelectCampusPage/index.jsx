import SelectCampusCard from "../SelectCampusCard";
import styles from "./styles.module.css";
import SelectCampusList from "../SelectCampusList";
import SelectCampusModal from "../SelectCampusModal";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import FormSectionHeader from "../../../../components/Form/FormSectionHeader";
import { useNavigate } from "react-router-dom";

function SelectCampusPage() {
  const { mostrar, registerData } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (registerData == null) {
      navigate("/signup");
    }
  }, [registerData, navigate]);

  return (
    <>
      <div
        className={`${styles.selectCampusContainer} container introAnimation py-5`}
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
