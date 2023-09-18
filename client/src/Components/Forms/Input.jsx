import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type,
  label,
  onChange,
  name,
  error,
  maxLength,
  onBlur,
  placeholder,
  disabled,
}) => {
  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
