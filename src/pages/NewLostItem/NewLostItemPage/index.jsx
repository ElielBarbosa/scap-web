import NewLostItemForm from "../NewUpLoadItemForm";
import styles from "./styles.module.css";

function NewLostItemPage() {
  return (
    <>
      <main className={styles.lostContainer}>
        <NewLostItemForm />
      </main>
    </>
  );
}

export default NewLostItemPage;
