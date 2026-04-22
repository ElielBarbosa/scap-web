import styles from "./styles.module.css";

//import { z, ZodError } from "zod";
///import { useContext } from "react";

import Button from "../../../components/Form/Button";
import Input from "../../../components/Form/Input";
//import useForm from "../../../hooks/UseForm";
import iconEmail from "../../../assets/icons/mail.svg";
import iconPassword from "../../../assets/icons/lock.svg";
import FormSectionHeader from "../../../components/Form/FormSectionHeader";
import { UserContext } from "../../../contexts/UserContext";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SignInForm() {
  const schemaLogin = yup.object({
    email: yup
      .string()
      .required("E-mail obrigatório")
      .min(6, "minimo 6 caracteres"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schemaLogin),
  });

  console.log("Erros: " + errors);

  //const { handdleLogin } = useContext(UserContext);

  //function onSubmit(event) {
  // event.preventDefault();
  // try {
  //   handdleLogin({ email: email.value, password: password.value });
  // } catch (err) {
  //   console.log(err);
  // }
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
  //}
  function onSubmit(data) {
    console.log(data);
    console.log(errors);
  }

  return (
    <div>
      <FormSectionHeader
        title="Login"
        subtitle="Credenciais de usuário"
        paragraph="Por favor preencha os campos da forma correta para entrar"
      />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
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
              type="password"
              name="password"
              placehoder="Senha"
              error={errors.password?.message}
              {...field}
            />
          )}
        />
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}

export default SignInForm;
