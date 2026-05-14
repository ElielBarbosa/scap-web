import styles from "./styles.module.css";

function TextArea({ name, placeholder, className }) {
  return (
    <textarea
      className={`${styles.textArea} ${className} w-100`}
      name={name}
      placeholder={placeholder}
    ></textarea>
  );
}

export default TextArea;
