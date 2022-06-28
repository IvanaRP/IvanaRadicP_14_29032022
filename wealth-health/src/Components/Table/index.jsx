import React, { useState } from "react";
import DataTable from "react-data-table-component";

// Manage columns for data table
const columns = [
  {
    name: "First Name",
    selector: "firstName",
    sortable: true,
  },
  {
    name: "Last Name",
    selector: "lastName",
    sortable: true,
  },
  {
    name: "Start Date",
    selector: "startDate",
    sortable: true,
  },
  {
    name: "Department",
    selector: "department",
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: "dateBirth",
    sortable: true,
  },
  {
    name: "Street",
    selector: "address",
    sortable: true,
  },
  {
    name: "City",
    selector: "city",
    sortable: true,
  },
  {
    name: "State",
    selector: "state",
    sortable: true,
  },
  {
    name: "Zip Code",
    selector: "zip",
    sortable: true,
  },
];

const EmployeesList = () => {
  //Set employee list
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  //Set keyword
  const [keyWord, setKeyWord] = useState("");

  /**
   * SearchEngine.
   * @param {string} word - search term.
   */
  const Search = (word) => {
    employees = employees.filter((employee) =>
      employee.firstName.toLowerCase().includes(word.toLowerCase())
    );

    return employees;
  };

  /**
   * SearchEngine starts.
   * @param {string} keyWord - search term.
   */
  if (keyWord !== "") Search(keyWord);

  return (
    <>
      <form>
        <div>
          <input
            className="p-1"
            type="text"
            placeholder="Search"
            onChange={(e) => setKeyWord(e.target.value)}
          />
        </div>
      </form>

      <div className="App">
        <DataTable
          pagination
          columns={columns}
          data={employees}
          highlightOnHover
        />
      </div>
    </>
  );
};

export default EmployeesList;
