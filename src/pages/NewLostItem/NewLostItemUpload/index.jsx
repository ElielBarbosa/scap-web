import styles from "./styles.module.css";
import { useRef, useState } from "react";

export default function NewLostItemUpload() {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFile = (file) => {
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className={styles.icon}>+</div>

        <p className={styles.text}>
          Drop your files here, or <span className={styles.browse}>Browse</span>
        </p>

        <input
          type="file"
          ref={inputRef}
          className={styles.input}
          onChange={handleChange}
          accept="image/*"
        />
      </div>

      {preview && (
        <div className={styles.previewBox}>
          <img src={preview} alt="preview" className={styles.previewImage} />
        </div>
      )}
    </div>
  );
}
