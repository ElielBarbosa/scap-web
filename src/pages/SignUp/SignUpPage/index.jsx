import { useContext } from "react";
import FormSectionHeader from "../../../components/Form/FormSectionHeader";
import styles from "./styles.module.css";
import SignUpForm from "../SignUpForm";
import { UserContext } from "../../../contexts/UserContext";
import AuthPanel from "../../../components/AuthPanel";
import { useNavigate } from "react-router-dom";

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
        <AuthPanel />
        <div>
          <FormSectionHeader
            title="Cadastro"
            error={errorRegister}
            paragraph="Por favor preencha os campos corretamente para criar uma nova conta"
          />
          <SignUpForm />
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
