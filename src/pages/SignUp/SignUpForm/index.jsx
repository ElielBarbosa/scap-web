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
import { useContext } from "react";

function SignUpForm() {
  const { verifyUser, setRegisterData } = useContext(UserContext);

  const navigate = useNavigate();
  const registerSchema = yup.object({
    username: yup
      .string()
      .min(6, "Nome deve ter no mínimo 6 caracteres")
      .required("Nome é obrigatório!"),
    password: yup
      .string()
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .required("Senha é obrigatória"),
    email: yup
      .string()
      .email("Insira um email válido")
      .required("E-mail é obrigatório"),
    registration: yup
      .string()
      .min(8, "Matrícula deve ter no mínimo 8 caracteres")
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
      registration: "",
    },
    resolver: yupResolver(registerSchema),
  });

  async function onSubmit(data) {
    const response = await verifyUser({
      email: data.email,
      registration: data.registration,
    });

    if (response.exist == true) {
      return;
    }

    setRegisterData(data);
    navigate("/select-campus");
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
          <div className={styles.inputContainerRegister}>
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
              name="registration"
              render={({ field }) => (
                <Input
                  iconUrl={iconId}
                  type="text"
                  name="registration"
                  error={errors.registration?.message}
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
          </div>
          <div className={`${styles.wrapperButtonRegister}`}>
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
