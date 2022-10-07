import React, { useState } from "react";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <RoutesMain />

      <ToastContainer
        position="top-right"
        autoClose={1400}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
