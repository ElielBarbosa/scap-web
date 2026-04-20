import { useState } from "react";

function useForm() {
  const [value, setValues] = useState("");
  //const [error, setError] = useState(null);

  // Parte de validação
  // function validate(value) {
  //   if (type === false) return true;

  //   if (value.length === 0) {
  //     setError("Preencha um valor.");
  //     return false;
  //   } else if (
  //     userLoginSchema[type] &&
  //     !userLoginSchema[type].regex.test(value)
  //   ) {
  //     console.log("validate ativado");
  //     setError(userLoginSchema.message);
  //     console.log(userLoginSchema[type]);
  //     return false;
  //   } else {
  //     setError(null);
  //     return true;
  //   }
  // }

  function onChange({ target }) {
    setValues(target.value);
  }
  return {
    value,
    setValues,
    onChange,
  };
}

export default useForm;
