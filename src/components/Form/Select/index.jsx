import styles from "./style.module.css";

function Select({ className, name, id, options = [] }) {
  return (
    <select
      name={name}
      key={id}
      className={`${styles.select} ${className}`}
      required
    >
      {options.map((option) => {
        return (
          <option value={option.id} className={`${styles.option}`}>
            {option.name_category}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
