import React from "react";
import clsx from "clsx";
const InputForm = ({
  label,
  disabled,
  register,
  errors,
  id,
  vallidate,
  type = "text",
  placeholder,
  fullWith,
  defaultValue,
}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        {...register(id, vallidate)}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx}
      />
    </div>
  );
};

export default InputForm;
