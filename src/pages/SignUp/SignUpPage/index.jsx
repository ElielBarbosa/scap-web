import FormSectionHeader from "../../../components/Form/FormSectionHeader";
//import styles from "./styles.module.css";
import SignUpForm from "../SignUpForm";

function SignUpPage() {
  return (
    <>
      <div className="container introAnimation">
        <FormSectionHeader
          title="Cadastro"
          subtitle="Dados de usuário"
          paragraph="Por favor preencha os campos da forma correta para criar uma nova conta"
        />
        <SignUpForm />
      </div>
    </>
  );
}

export default SignUpPage;
