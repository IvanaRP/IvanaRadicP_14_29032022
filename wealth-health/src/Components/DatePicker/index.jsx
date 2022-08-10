import React from "react";
import PropTypes from "prop-types";

export default function Date({
  type,
  name,
  labelTitle,
  setDate,
  placeholder,
  max,
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
          setDate(e.target.value);
        }}
        max={max}
      />
    </label>
  );
}

Date.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelTitle: PropTypes.string,
  setDate: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
};
