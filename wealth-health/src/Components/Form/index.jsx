import React, { useState } from "react";
// import Input from "../../Components/Input";

export default function EmployeesForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const AddEmployee = (e) => {
    e.preventDefault();
    const employeeData = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = {
      firstName,
      lastName,
      dateBirth,
      startDate,
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
