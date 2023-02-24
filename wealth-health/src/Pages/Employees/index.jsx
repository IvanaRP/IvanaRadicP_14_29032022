import { Link } from "react-router-dom";
import "../../styles/employees.css";

import EmployeesList from "../../Components/Table";

function Employees() {
  return (
    <div className="employeesWrapper">
      <div className="employeesContainer">
        <h1>Current Employees</h1>

        <EmployeesList />
        <Link to="/IvanaRadicP_14_29032022" className="employeesWrapper-link">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Employees;
