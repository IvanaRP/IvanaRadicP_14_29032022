import { Link } from "react-router-dom";
import "../../styles/employees.css";
// // import BasicTable from "../../Components/Table/BasicTable"; //table mocked up data
// import Table from "../../Components/InputTable/DisplayFromDataInT";
// import { useState } from "react";
function Employees() {
  return (
    <div className="employeesWrapper">
      <div className="employeesContainer">
        <h1>Current Employees</h1>
        <div>Table</div>

        <Link to="/" className="employeesWrapper-link">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Employees;
