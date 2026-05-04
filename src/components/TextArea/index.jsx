import styles from "./TextArea.module.css";

function TextArea({ name, description }) {
  return (
    <textarea
      className={styles.textArea}
      name={name}
      placeholder={description}
    ></textarea>
  );
}

export default TextArea;
