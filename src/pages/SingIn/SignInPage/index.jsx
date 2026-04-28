import { useContext, useEffect } from "react";
import SignInForm from "../SingInForm";
import styles from "./styles.module.css";
import { UserContext } from "../../../contexts/UserContext";
import FormSectionHeader from "../../../components/Form/FormSectionHeader";

function SignInPage() {
  const { setErrorLogin, errorLogin } = useContext(UserContext);

  useEffect(() => {
    setErrorLogin(null);
  }, []);

  return (
    <div className={`${styles.signInContainer} introAnimation container pt-5`}>
      <FormSectionHeader
        title="Login"
        error={errorLogin}
        paragraph="Por favor preencha os campos da forma correta para entrar"
      />
      <SignInForm></SignInForm>
    </div>
  );
}

export default SignInPage;
