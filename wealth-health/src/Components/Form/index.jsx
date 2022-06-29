import React, { useState } from "react";
import Dropdown from "../../Components/Dropdown";

import departments from "../../Datas/departments";
import states from "../../Datas/states";

export default function EmployeesForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [department, setDepartment] = useState("");

  const AddEmployee = (e) => {
    e.preventDefault();
    const employeeData = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = {
      firstName,
      lastName,
      dateBirth,
      startDate,
      street,
      city,
      state,
      zip,
      department,
    };

    //Saving to localStorage employees
    employeeData.push(employee);
    localStorage.setItem("employees", JSON.stringify(employeeData));
    console.log("newEmployee");
    alert(JSON.stringify(employee));
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={AddEmployee} autoComplete="off">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          required="required"
        />
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
          required="required"
        />

        <label htmlFor="birth" className="form-label">
          Date of birth
        </label>
        <input
          type="date"
          className="form-control"
          placeholder="DD/MM/YY"
          onChange={(e) => setDateBirth(e.target.value)}
          required="required"
        />
        <label htmlFor="birth" className="form-label">
          Start Date
        </label>
        <input
          type="date"
          className="form-control"
          placeholder="DD/MM/YY"
          onChange={(e) => setStartDate(e.target.value)}
          required="required"
        />
        <fieldset className="inputAdressSection">
          <legend>Address</legend>
          <label htmlFor="inputAddress" className="form-label">
            Street
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            onChange={(e) => setStreet(e.target.value)}
            required="required"
          />
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            onChange={(e) => setCity(e.target.value)}
            required="required"
          />
          <Dropdown
            name="state"
            labelTitle="State"
            setDrop={setState}
            datas={states}
          />
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="number"
            className="form-control"
            id="inputZip"
            onChange={(e) => setZip(e.target.value)}
            required="required"
          />
        </fieldset>
        <Dropdown
          name="department"
          labelTitle="Department"
          setDrop={setDepartment}
          datas={departments}
          errorMessage={"Please select department"}
        />

        <div>
          <button className="home-button">Save</button>
        </div>
      </form>
    </>
  );
}
