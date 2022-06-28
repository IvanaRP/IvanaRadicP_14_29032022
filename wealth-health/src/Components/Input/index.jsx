import React from "react";

export default function Input({
  name,
  type,
  className,
  placeholder,
  labelTitle,
}) {
  return (
    <>
      <label htmlFor={name} className="form-label">
        <p>{labelTitle}</p>
      </label>
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        //   onChange={(e) => setFirstName(e.target.value)}
        required
      />
    </>
  );
}
