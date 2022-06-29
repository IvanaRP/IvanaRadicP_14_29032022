import React from "react";
import Select from "react-select";

export default function SelectInput({ name, setDrop, options, labelTitle }) {
  return (
    <label className="label" htmlFor={name}>
      <p>{labelTitle}</p>
      <Select
        required
        onChange={(e) => setDrop(e.target.value)}
        options={options}
      />
    </label>
  );
}
