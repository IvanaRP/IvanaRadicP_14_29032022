import { Link } from "react-router-dom";
import Form from "../../Components/Form";
import "../../styles/home.css";

function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeContainer">
        <div class="title">
          <h1>HRnet</h1>
        </div>
        <div className="home-formContainer">
          <Link to="/employee-list" className="homeWrapper-link">
            View Current Employees
          </Link>
          <h2>Create Employee</h2>
          <Form />

          <button onclick="saveEmployee()">Save</button>
        </div>
        <div id="confirmation" className="modal">
          Employee Created!
        </div>
      </div>
    </div>
  );
}

export default Home;
