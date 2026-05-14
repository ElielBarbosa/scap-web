import styles from "./styles.module.css";

import Input from "../../../components/Form/Input";
import RegisterObjectHeader from "../RegisterObjectHeader";
import TextArea from "../../../components/Form/TextArea";
import Select from "../../../components/Form/Select";
import Button from "../../../components/Form/Button";
import RegisterObjectUpload from "../RegisterObjectUpload";

function RegisterObjectForm() {
  return (
    <form className={styles.registerObjectFormContainer}>
      <div className="dataContainer">
        <Input placehoder="Nome" type="text" />
        <Select className="w-100 mb-1" />
        <TextArea className="w-100" placeholder="Descrição" />
        <Button variant="primary" className="mt-1">
          Registrar Objeto
        </Button>
      </div>
      <div className="uploadContainer">
        <RegisterObjectUpload />
      </div>
    </form>
  );
}

export default RegisterObjectForm;
