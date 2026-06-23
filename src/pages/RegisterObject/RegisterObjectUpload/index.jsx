import styles from "./styles.module.css";
import { useRef, useState } from "react";
import deleteIcon from "../../../assets/icons/trash-red.svg";

function RegisterObjectUpload({ name }) {
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // Manipuladores de eventos
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileData = {
        name: file.name,
        size: (file.size / 1024).toFixed(0) + "kb",
        url: URL.createObjectURL(file), // Para preview se desejar usar no futuro
      };
      setSelectedFile(fileData);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        onClick={handleClick}
        onDragOver={handleDragOver}
      >
        <div className={styles.icon}>+</div>

        <p className={styles.text}>
          Drop your files here, or <span className={styles.browse}>Browse</span>
        </p>

        <input
          name={name}
          type="file"
          ref={inputRef}
          className={styles.input}
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>

      {selectedFile && (
        <div className={styles.fileCard}>
          <div className={styles.fileThumb}>
            {/* O ponto de interrogação após selectedFile garante que ele só acesse 'type' se selectedFile existir */}
            {selectedFile?.type?.startsWith("image/") ? (
              <img
                src={selectedFile.url}
                alt="Preview"
                className={styles.thumbImage}
              />
            ) : (
              <div className={styles.defaultIcon}>📄</div>
            )}
          </div>

          <div className={styles.fileInfo}>
            <p className={styles.fileName}>{selectedFile.name}</p>
            <span className={styles.fileSize}>{selectedFile.size}</span>
          </div>
          <button className={styles.deleteBtn} onClick={handleDeleteFile}>
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      )}
    </div>
  );
}

export default RegisterObjectUpload;
