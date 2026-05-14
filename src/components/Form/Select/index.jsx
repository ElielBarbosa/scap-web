import styles from "./style.module.css";

function Select({
  className,
  options = [
    { id: 2, name: "Eletronicos" },
    { id: 2, name: "Uso pessoal" },
    { id: 2, name: "Documentos" },
  ],
}) {
  return (
    <select className={`${styles.select} ${className}`}>
      {options.map((option) => {
        {
          console.log(option.id);
        }
        return (
          <option value={option.id} className={`${styles.option}`}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
