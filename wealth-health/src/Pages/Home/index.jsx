import { Link } from "react-router-dom";
import React from "react";

import "react-responsive-modal/styles.css";

import "../../styles/home.css";
import EmployeesForm from "../../Components/Form";

function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeContainer">
        <div className="home-formContainer">
          <Link to="/employee-list" className="homeWrapper-link">
            View Current Employees
          </Link>
          <h2>Create Employee</h2>
          <EmployeesForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
