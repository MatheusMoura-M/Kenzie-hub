import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dash from "../components/Dashboard/dash";
import LoadingPage from "../components/Loading/loading";
import Login from "../components/Login/login";
import Register from "../components/Register/register";

const RoutesMain = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} loading={loading} setLoading={setLoading}/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dash />} />
      <Route path="/loading" element={<LoadingPage loading={loading} />} />
    </Routes>
  );
};

export default RoutesMain;
