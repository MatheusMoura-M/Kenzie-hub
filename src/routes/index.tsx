import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dash from "../components/Dashboard/dash";
import Login from "../components/Login/login";
import Register from "../components/Register/register";
import { AnimatePresence } from "framer-motion";

const RoutesMain = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesMain;
