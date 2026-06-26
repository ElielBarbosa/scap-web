import styles from "./styles.module.css";

import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";

import SignInForm from "../SingInForm";
import FormSectionHeader from "../../../components/Form/FormSectionHeader";
import AuthPanel from "../../../components/AuthPanel";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const { userLoged } = useContext(UserContext);
  const navigation = useNavigate();

  useEffect(() => {
    if (userLoged) {
      navigation("/");
    }
  }, [userLoged, navigation]);

  return (
    <div className={`${styles.signInContainer} introAnimation container pt-5`}>
      <AuthPanel
        title="Olá, Seja bem-vindo"
        message="SCAP — Sistema de Controle de Achados e Perdidos."
      />
      <SignInForm />
    </div>
  );
}

export default SignInPage;
