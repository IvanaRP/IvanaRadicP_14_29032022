import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route_Home, Route_Employees } from "./Utils/router";
import "./index.css";

import Header from "./Components/Header";
import Error from "./Components/Error";
import Home from "./Pages/Home";
import Employees from "./Pages/Employees";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path={Route_Home} element={<Home />} />
        <Route exact path={Route_Employees} element={<Employees />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
