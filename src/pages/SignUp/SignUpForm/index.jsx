import Button from "../../../components/Form/Button";
import Input from "../../../components/Form/Input";
import iconPassword from "../../../assets/icons/lock.svg";
import iconEmail from "../../../assets/icons/mail.svg";
import iconUser from "../../../assets/icons/user.svg";
import iconId from "../../../assets/icons/id-badge.svg";
//import useForm from "../../../hooks/UseForm";
import styles from "./styles.module.css";
//import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SignUpForm() {
  //const { createNewUser } = useContext(UserContext);
  const navigate = useNavigate();
  const registerSchema = yup.object({
    username: yup
      .string()
      .min(6, "Min. 6 caracateres")
      .required("Nome é obrigatório!"),
    password: yup
      .string()
      .min(6, "Min. 6 caracteres")
      .required("Senha é obrigatória"),
    email: yup
      .string()
      .email("Insira um email válido")
      .required("E-mail é obrigatório"),
    register: yup
      .string()
      .min(8, "Min 8 caracteres.")
      .required("Matrícula é obrigatória"),

    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não coincidem")
      .required("Confirmação de senha é obrigatória"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      register: "",
    },
    resolver: yupResolver(registerSchema),
  });

  function onSubmit(data) {
    // event.preventDefault();
    // const bodyRequest = {
    //   username: username.value,
    //   email: email.value,
    //   passwordHash: password.value,
    //   registration: register.value,
    //   campusId: 1,
    // };
    try {
      //createNewUser(data);
      // console.log(response)
    } catch (error) {
      console.log(error);
    }
    window.localStorage.setItem("dataRegister", JSON.stringify(data));
    const dataGuardada = window.localStorage.getItem("dataRegister");
    navigate("/select-campus");
    console.log(JSON.parse(dataGuardada));
    // try {
    //   createNewUser(bodyRequest);
    //   // console.log(response)
    // } catch (error) {
    //   console.log(error);
    // }
    navigate("/select-campus");
    console.log(data);
  }

  return (
    <>
      <div>
        <form
          action=""
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className={`${styles.registerFormContainer}`}
        >
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <Input
                iconUrl={iconUser}
                type="text"
                name="username"
                placeholder="Nome"
                error={errors.username?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                iconUrl={iconEmail}
                type="email"
                name="email"
                placeholder="E-mail"
                error={errors.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                iconUrl={iconPassword}
                type="text"
                name="password"
                placeholder="Senha"
                error={errors.password?.message}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="register"
            render={({ field }) => (
              <Input
                iconUrl={iconId}
                type="text"
                name="register"
                error={errors.register?.message}
                placeholder="Matrícula"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                iconUrl={iconPassword}
                type="password"
                name="password"
                placeholder="Senha"
                error={errors.password?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="passwordConfirmation"
            render={({ field }) => (
              <Input
                iconUrl={iconPassword}
                type="password"
                name="passwordConfirmation"
                placeholder="Confirmar Senha"
                error={errors.passwordConfirmation?.message}
                {...field}
              />
            )}
          />
          <div className={`${styles.wrapperButtonRegister}`}>
            <Link to="/">
              <Button variant="secondary">Voltar</Button>
            </Link>
            <Button variant="primary" type="submit">
              Próximo
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
