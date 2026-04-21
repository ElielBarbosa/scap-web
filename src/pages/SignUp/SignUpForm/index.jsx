import Button from "../../../components/Form/Button";
import Input from "../../../components/Form/Input";
import iconPassword from "../../../assets/icons/lock.svg";
import iconEmail from "../../../assets/icons/mail.svg";
import iconUser from "../../../assets/icons/user.svg";
import iconId from "../../../assets/icons/id-badge.svg";
import useForm from "../../../hooks/UseForm";
import styles from "./styles.module.css";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";

function SignUpForm() {
  const username = useForm();
  const email = useForm();
  const password = useForm();
  const register = useForm();

  const { registerData, setRegisterData } = useContext(UserContext);
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    setRegisterData({
      username: username.value,
      email: email.value,
      passwordHash: password.value,
      registration: register.value,
      campusId: null,
    });
    console.log(registerData);

    navigate("/select-campus");
  }

  return (
    <>
      <div>
        <form
          action=""
          method="post"
          onSubmit={onSubmit}
          className={`${styles.registerFormContainer}`}
        >
          <Input
            iconUrl={iconUser}
            type="text"
            name="username"
            placehoder="Nome"
            value={username.value}
            onChange={username.onChange}
            required
          />
          <Input
            iconUrl={iconEmail}
            type="email"
            name="email"
            placehoder="E-mail"
            value={email.value}
            onChange={email.onChange}
            required
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
          <Input
            iconUrl={iconId}
            type="text"
            name="register"
            placehoder="Matrícula"
            value={register.value}
            onChange={register.onChange}
            required
          />
          <div className={`${styles.wrapperButtonRegister}`}>
            <Link to="/">
              <Button variant="secondary">Voltar</Button>
            </Link>
            <Button onClick={onSubmit} variant="primary">
              Próximo
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
