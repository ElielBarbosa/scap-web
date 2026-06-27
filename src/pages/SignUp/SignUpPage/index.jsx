import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import FormSectionHeader from "../../../components/Form/FormSectionHeader";
import styles from "./styles.module.css";
import SignUpForm from "../SignUpForm";
import AuthPanel from "../../../components/AuthPanel";

function SignUpPage() {
  const { errorRegister, userLoged } = useContext(UserContext);
  const navigation = useNavigate();
  if (userLoged) {
    navigation("/");
  }
  return (
    <>
      <div
        className={`${styles.signUpContainer} container introAnimation pt-5`}
      >
        <AuthPanel
          title="Olá, Seja bem-vindo"
          message="SCAP — Sistema de Controle de Achados e Perdidos."
        />
        <div className={`${styles.signUpFormContainer}`}>
          <FormSectionHeader
            error={errorRegister}
            paragraph="Preencha os campos para cria sua conta."
          />
          <SignUpForm />
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
