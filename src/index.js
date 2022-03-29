import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Overview,
  TestConfig,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/testConfig" element={<TestConfig />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

