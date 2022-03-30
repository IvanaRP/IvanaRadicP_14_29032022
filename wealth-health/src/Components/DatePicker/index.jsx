import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-GB";
registerLocale("en", en);

const DatePickerForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      locale="es"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default DatePickerForm;
