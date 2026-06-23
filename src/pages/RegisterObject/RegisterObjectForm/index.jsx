import styles from "./styles.module.css";

import Input from "../../../components/Form/Input";
import RegisterObjectHeader from "../RegisterObjectHeader";
import TextArea from "../../../components/Form/TextArea";
import Select from "../../../components/Form/Select";
import Button from "../../../components/Form/Button";
import RegisterObjectUpload from "../RegisterObjectUpload";
import { registerObject } from "../../../api/api";
import { getCategories } from "../../../api/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

function RegisterObjectForm() {
  const [options, setOptions] = useState([]);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    async function getCategoriesApi() {
      try {
        const carregarDados = await getCategories();

        setOptions(carregarDados);
        console.log(options);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    }
    getCategoriesApi();
  }, []);

  async function handleSubmit(e) {
    // 1. Evita que a página recarregue (comportamento padrão do HTML)
    e.preventDefault();
    console.log(userData);

    // 2. Captura todos os inputs do formulário automaticamente usando o atributo 'name' de cada um
    //const formElement = e.currentTarget;
    const formData = new FormData();
    formData.append("nameObject", e.currentTarget.nameObject.value);
    formData.append("category", e.currentTarget.category.value);
    formData.append("description", e.currentTarget.description.value);
    formData.append("image", e.currentTarget.image.files[0]);
    formData.append("campusId", userData.campusId);
    formData.append("userId", userData.id);

    console.log(formData.get("image"));
    //para ver os dados no console:
    console.log(Object.fromEntries(formData.entries()));

    try {
      // 3. Envia o formData (que já contém text e arquivo) para sua API
      const response = await registerObject(formData);
      console.log("Sucesso:", response);
      //console.log("Erro", response.error);
      e.target.reset();
    } catch (error) {
      console.log(error.response);
      console.error("Erro ao enviar:", error);
      e.target.reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit} // Apenas a referência, sem os parênteses
      encType="multipart/form-data" // 'T' maiúsculo para JSX
      className={`${styles.registerObjectFormContainer}`}
    >
      <div className={styles.dataContainer}>
        <Input name="nameObject" placeholder="Nome" type="text" />
        <Select name="category" className="w-100 mb-1" options={options} />
        <TextArea
          name="description"
          className="w-100"
          placeholder="Descrição"
        />
        <Button variant="primary" className="mt-1" type="submit">
          Registrar Objeto
        </Button>
      </div>
      <div className={styles.uploadContainer}>
        {/* Garanta que dentro desse componente exista um <input type="file" name="image" /> */}
        <RegisterObjectUpload name="image" />
      </div>
    </form>
  );
}

export default RegisterObjectForm;
