import React, { useState } from "react";

export default function EmployeesForm() {
  const [firstName, setFirstName] = useState("");
  const AddEmployee = (e) => {
    e.preventDefault();
    const employeeData = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = {
      firstName,
    };

    //Saving to localStorage employees
    employeeData.push(employee);
    localStorage.setItem("employees", JSON.stringify(employeeData));
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
          aria-label="First name"
          onChange={(e) => setFirstName(e.target.value)}
          required="required"
        />

        <label className="inputWrapper">
          Last Name
          <input type="text" label="lastName" name="lastName" />
        </label>

        <fieldset className="inputAdressSection">
          <legend>Address</legend>
        </fieldset>

        <div className="input">
          <label className="input-label" type="text" htmlFor="state">
            Department:
          </label>
        </div>
        <div>
          <button className="home-button">Save</button>
        </div>
      </form>
    </>
  );
}
