import { Link } from "react-router-dom";
import Table from "../../Components/Table";
import "../../styles/employees.css";

function Employees() {
  return (
    <div className="employeesWrapper">
      <div className="employeesContainer">
        <h1>Current Employees</h1>
        <Table />

        <Link to="/" className="employeesWrapper-link">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Employees;
