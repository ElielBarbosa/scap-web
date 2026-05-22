import styles from "./style.module.css";

function Select({
  className,
  name,
  options = [
    { id: 2, name: "Eletronicos" },
    { id: 3, name: "Uso pessoal" },
    { id: 4, name: "Documentos" },
  ],
}) {
  return (
    <select name={name} className={`${styles.select} ${className}`}>
      {options.map((option) => {
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
