import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../components/Register/register";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Register />} />
  </Routes>
);

export default RoutesMain;
