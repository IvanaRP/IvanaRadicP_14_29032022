import React from "react";
import PropTypes from "prop-types";

export default function Input({
  type,
  name,
  labelTitle,
  setInput,
  placeholder,
}) {
  return (
    <label className="label" htmlFor={name}>
      <p>{labelTitle}</p>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelTitle: PropTypes.string,
  setInput: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
};
