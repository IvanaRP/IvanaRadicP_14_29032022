import { useState } from "react";
import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { departments, states } from "../../Datas/data";
// import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DatePicker from "react-date-picker";
import Select from "react-select";

const initialFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  stateId: "",
  hireDate: new Date(),
  isPermanent: false,
};
export default function EmployeesForm() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };
  console.log(addEmployee);

  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("test");
  };

  return (
    <>
      <div>EmployeesForm</div>

      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            autoComplete="off"
            id="first-name"
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            autoComplete="off"
            id="email"
          />
        </label>

        <div className="input">
          <label className="input-label" type="text" htmlFor="state">
            Department:
          </label>
          <Select
            name="departmentId"
            label="Department"
            placeholder="Select an option"
            value={values.departmentId}
            onChange={handleInputChange}
            options={departments}
          />
        </div>
        <div className="input">
          <label className="input-label" type="text" htmlFor="state">
            State:
          </label>
          <Select
            name="stateId"
            label="State"
            placeholder="Select an option"
            value={values.stateId}
            options={states}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <DatePicker
            name="hireDate"
            label="Date"
            format="MM/dd/yyyy"
            onChange={handleInputChange}
            value={values.hireDate}
          />
        </div>

        <div>
          <button className="home-button" onClick={onOpenModal}>
            Save
          </button>
          <Modal open={open} onClose={onCloseModal} center>
            <h2>Employee Created!</h2>
          </Modal>
        </div>
      </form>
    </>
  );
}
