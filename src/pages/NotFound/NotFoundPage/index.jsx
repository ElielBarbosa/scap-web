import Button from "../../../components/Form/Button";
import style from "./styles.module.css";
import { Link } from "react-router-dom";
import image404 from "../../../assets/icons/code-404.svg";

function NotFoundPage() {
  return (
    <div className={`${style.notFounContainer} container mt-5`}>
      <div>
        <span className={`${style.text}`}>Ooops...</span>
        <img src={image404} alt="" srcset="" className={style.image404} />
      </div>
      <div>
        <h6 className={`${style.title}`}>Acho que você se perdeu</h6>
        <p className={`${style.messager}`}>
          Parece que o caminho que você procura não foi encontrado no scap
        </p>
      </div>
      <Link to="/">
        <Button variant="primary">Voltar ao início</Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
