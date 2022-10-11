import React from "react";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Contexts/AuthContext";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>

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
