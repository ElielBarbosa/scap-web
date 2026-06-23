import styles from "./styles.module.css";

function ObjectImage({ urlImage }) {
  const urlBase = "http://localhost:3000/uploads/";
  return (
    <img className={`${styles.img} `} src={`${urlBase}${urlImage}`} alt="" />
  );
}

export default ObjectImage;
