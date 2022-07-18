import React from "react";
import PropTypes from "prop-types";

export default function Date({ type, name, labelTitle, setDate, placeholder }) {
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
};
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// const Example = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
//   );
// };
