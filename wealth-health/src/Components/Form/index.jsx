import React, { useState } from "react";

import Dropdown from "../../Components/Dropdown";
import Input from "../../Components/Input";
import Date from "../../Components/DatePicker";

import { Requirements } from "iv-p14-modal";
// import Modal from "../Modal";

import departments from "../../Datas/departments";
import states from "../../Datas/states";

import "../../styles/form.css";

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
  const [isDisplayed, setDisplayed] = useState(false);

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

    //Display modal validation
    setDisplayed(true);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={AddEmployee} autoComplete="off">
        <div className="inputNameSection">
          <Input
            type="text"
            name="firstName"
            labelTitle="First Name"
            placeholder="First name"
            setInput={setFirstName}
          />
          <Input
            type="text"
            name="lastName"
            labelTitle="Last name"
            placeholder="Last name"
            setInput={setLastName}
          />
          <Date
            type="date"
            name="dateBirth"
            labelTitle="Date of birth"
            placeholder="DD/MM/YY"
            setDate={setDateBirth}
            max={"2022-08-10"}
          />
          <Date
            type="date"
            name="dateStart"
            labelTitle="Start Date"
            placeholder="DD/MM/YY"
            setDate={setStartDate}
          />
        </div>

        <fieldset className="inputAdressSection">
          <legend>Address</legend>
          <Input
            type="text"
            name="inputAddress"
            labelTitle="Street"
            placeholder="Street"
            setInput={setStreet}
          />
          <Input
            type="text"
            name="inputCitys"
            labelTitle="City"
            placeholder="City"
            setInput={setCity}
          />

          <Dropdown
            className="dropDown"
            name="state"
            labelTitle="State"
            setDrop={setState}
            datas={states}
          />
          <Input
            type="number"
            name="inputZip"
            labelTitle="Zip"
            placeholder="Zip"
            setInput={setZip}
          />
        </fieldset>

        <Dropdown
          name="department"
          labelTitle="Department"
          setDrop={setDepartment}
          datas={departments}
        />

        <div>
          <button className="form-buttonSave">Save</button>
          {isDisplayed ? (
            <Requirements text="Employee Created!" setShow={setDisplayed} />
          ) : (
            ""
          )}
        </div>
      </form>
    </>
  );
}
