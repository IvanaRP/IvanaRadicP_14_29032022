import { useState } from "react";
import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { departments, states } from "../../Datas/data";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Select from "react-select";

const initialFieldValues = {
  id: 0,
  fullName: "",
  lastName: "",
  startDate: "",
  department: "",
  birthDate: "",
  street: "",
  city: "",
  zipCode: "",
};
export default function EmployeesForm() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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

      <form onSubmit={handleSubmit} autoComplete="off">
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
          Last Name:
          <input
            type="text"
            label="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
            autoComplete="off"
            id="lastName"
          />
        </label>
        <div className="input">
          <label className="input-label" type="text" htmlFor="state">
            Start Date:
          </label>
          <DatePicker
            name="startDate"
            label="Date"
            format="MM/dd/yyyy"
            onChange={handleInputChange}
            value={values.startDate}
          />
        </div>
        <div className="input">
          <label className="input-label" type="text" htmlFor="state">
            Department:
          </label>
          <Select
            name="department"
            label="Department"
            placeholder="Select an option"
            value={values.department}
            onChange={handleInputChange}
            options={departments}
          />
        </div>
        <div className="input">
          <label className="input-label" type="text" htmlFor="state">
            Birth Date:
          </label>
          <DatePicker
            name="birthDate"
            label="Date"
            format="MM/dd/yyyy"
            onChange={handleInputChange}
            value={values.birthDate}
          />
        </div>
        <div className="input">
          <label>
            Street:
            <input
              type="text"
              label="street"
              name="street"
              value={values.street}
              onChange={handleInputChange}
              autoComplete="off"
              id="street"
            />
          </label>
        </div>
        <div className="input">
          <label>
            City:
            <input
              type="text"
              label="city"
              name="city"
              value={values.city}
              onChange={handleInputChange}
              autoComplete="off"
              id="city"
            />
          </label>
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
        <div className="input">
          <label>
            Zip Code:
            <input
              type="text"
              label="zipCode"
              name="zipCode"
              value={values.zipCode}
              onChange={handleInputChange}
              autoComplete="off"
              id="zipCode"
            />
          </label>
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
