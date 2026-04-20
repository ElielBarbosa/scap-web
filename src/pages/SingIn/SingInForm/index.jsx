import styles from "./styles.module.css";

//import { z, ZodError } from "zod";
import { useContext } from "react";

import Button from "../../../components/Form/Button";
import Input from "../../../components/Form/Input";
import useForm from "../../../hooks/UseForm";
import iconEmail from "../../../assets/icons/mail.svg";
import iconPassword from "../../../assets/icons/lock.svg";
import FormSectionHeader from "../../../components/Form/FormSectionHeader";
import { UserContext } from "../../../contexts/UserContext";

function SignInForm() {
  //const [isLoading, setIsLoading] = useState(false);

  const email = useForm();
  const password = useForm();

  const { handdleLogin } = useContext(UserContext);

  function onSubmit(event) {
    event.preventDefault();
    try {
      handdleLogin({ email: email.value, password: password.value });
    } catch (err) {
      console.log(err);
    }
    // try {
    //   setIsLoading(true);
    //   const data = signInSchema.parse({
    //     email,
    //     password,
    //   });
    // } catch (error) {
    //   if (error instanceof ZodError) {
    //     return alert(error.issues[0].message);
    //   }
    //   alert("Não foi possível cadastrar");
    // } finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <div>
      <FormSectionHeader
        title="Login"
        subtitle="Credenciais de usuário"
        paragraph="Por favor preencha os campos da forma correta para entrar"
      />
      <form action="" onSubmit={onSubmit} className={styles.loginForm}>
        <Input
          iconUrl={iconEmail}
          type="email"
          name="email"
          placehoder="E-mail"
          value={email.value}
          onChange={email.onChange}
          required
        />
        <Input
          iconUrl={iconPassword}
          type="password"
          name="password"
          placehoder="Senha"
          value={password.value}
          onChange={password.onChange}
          required
        />
        <Button variant="primary">Entrar</Button>
      </form>
    </div>
  );
}

export default SignInForm;
