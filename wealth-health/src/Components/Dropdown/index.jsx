import PropTypes from "prop-types";

export default function Dropdown({ name, setDrop, datas, labelTitle }) {
  return (
    <label className="label" htmlFor={name}>
      <p>{labelTitle}</p>
      <select name={name} required onChange={(e) => setDrop(e.target.value)}>
        {datas.map((elt) => (
          <option key={elt.id} value={elt.label}>
            {elt.name}
          </option>
        ))}
      </select>
    </label>
  );
}
Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  setDrop: PropTypes.func,
  datas: PropTypes.array,
  labelTitle: PropTypes.string.isRequired,
};
