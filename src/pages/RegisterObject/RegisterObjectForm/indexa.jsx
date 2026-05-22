import styles from "./styles.module.css";

import Input from "../../../components/Form/Input";
import RegisterObjectHeader from "../RegisterObjectHeader";
import TextArea from "../../../components/Form/TextArea";
import Select from "../../../components/Form/Select";
import Button from "../../../components/Form/Button";
import RegisterObjectUpload from "../RegisterObjectUpload";
import { uploadImage } from "../../../api/api";

async function RegisterObjectForm() {
  async function handleSubmit() {
    const formData = new FormData();

    formData.append("name");
    formData.append("category");
    formData.append("description");
    formData.append("image");

    const response = await uploadImage();
    console.log(response);
  }
  return (
    <form
      action="/upload"
      method="POST"
      enctype="multipart/form-data"
      onSubmit={handleSubmit}
      className={styles.registerObjectFormContainer}
    >
      <div className="dataContainer">
        <Input name="name" placehoder="Nome" type="text" />
        <Select name="category" className="w-100 mb-1" />
        <TextArea
          name="description"
          className="w-100"
          placeholder="Descrição"
        />
        <Button variant="primary" className="mt-1">
          Registrar Objeto
        </Button>
      </div>
      <div name="image" className="uploadContainer">
        <RegisterObjectUpload />
      </div>
    </form>
  );
}

export default RegisterObjectForm;
