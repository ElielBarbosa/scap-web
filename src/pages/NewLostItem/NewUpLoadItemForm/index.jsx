import Input from "../../../components/Form/Input";
import NewLostItemUpload from "../NewLostItemUpload";

import styles from "./styles.module.css";

function NewLostItemForm() {
  return (
    <>
      <form action="" className={styles.lostIteFormContainer}>
        <div className={styles.lostNewItemFormWrapper}>
          <label htmlFor="title">Titulo do item:</label>
          <Input type="text" name="title" placeholder="Titulo do item" />
          <Input type="select" name="category" placeholder="Categoria" />
        </div>
        <div className={styles.uploadImageWrapper}>
          <NewLostItemUpload />
        </div>
      </form>
    </>
  );
}

export default NewLostItemForm;
