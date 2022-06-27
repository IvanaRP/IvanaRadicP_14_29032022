import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route_Home, Route_Employees } from "./Utils/router";
import "./index.css";

import Error from "./Components/Error";
import Home from "./Pages/Home";

import Employees from "./Pages/Employees";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={Route_Home} element={<Home />} />
        <Route exact path={Route_Employees} element={<Employees />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
export default App;
