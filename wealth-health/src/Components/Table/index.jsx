import "../../styles/table.css";

function Table() {
  return (
    <div className="employeesTable">
      <table className="employee-table">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Start Date</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
          <tr>
            <td>First Name</td>
            <td>First Name</td>
            <td>First Name</td>
            <td>First Name</td>
            <td>First Name</td>
            <td>First Name</td>
            <td>First Name</td>
            <td>First Name</td>
            <td>First Name</td>
          </tr>
        </table>
      </table>
    </div>
  );
}

export default Table;
