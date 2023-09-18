import React from "react";
import styles from "./SelectInput.module.css";

const SelectInput = ({
  label,
  name,
  options,
  value,
  setValue,
  disabled,
  ...props
}) => {
  return (
    <div>
      <label disabled={disabled} className={styles.label} htmlFor={name}>
        {label}
      </label>
      <select
        className={styles.select}
        id={name}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        disabled={disabled}
        {...props}
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
