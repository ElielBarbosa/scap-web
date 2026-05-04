import { useContext, useEffect } from "react";
import SignInForm from "../SingInForm";
import styles from "./styles.module.css";
import { UserContext } from "../../../contexts/UserContext";
import FormSectionHeader from "../../../components/Form/FormSectionHeader";
import AuthPanel from "../../../components/AuthPanel";

function SignInPage() {
  const { setErrorLogin, errorLogin } = useContext(UserContext);

  useEffect(() => {
    setErrorLogin(null);
  }, []);

  return (
    <div className={`${styles.signInContainer} introAnimation container pt-5`}>
      <AuthPanel></AuthPanel>
      <div>
        <FormSectionHeader
          title="Login"
          error={errorLogin}
          paragraph="Preencha os campos corretamentepara acessar a plataforma."
        />
        <SignInForm></SignInForm>
      </div>
    </div>
  );
}

export default SignInPage;
