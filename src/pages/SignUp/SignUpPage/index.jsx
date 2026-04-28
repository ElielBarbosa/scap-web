import { useContext } from "react";
import FormSectionHeader from "../../../components/Form/FormSectionHeader";
//import styles from "./styles.module.css";
import SignUpForm from "../SignUpForm";
import { UserContext } from "../../../contexts/UserContext";

function SignUpPage() {
  const { errorRegister } = useContext(UserContext);
  return (
    <>
      <div className="container introAnimation">
        <FormSectionHeader
          title="Cadastro"
          error={errorRegister}
          paragraph="Por favor preencha os campos da forma correta para criar uma nova conta"
        />
        <SignUpForm />
      </div>
    </>
  );
}

export default SignUpPage;
