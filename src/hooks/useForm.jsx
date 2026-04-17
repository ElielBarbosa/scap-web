import { useState } from "react";

function useForm() {
  const [value, setValues] = useState("");

  function onChange({ target }) {
    setValues(target.value);
  }
  return { value, setValues, onChange };
}

export default useForm;
