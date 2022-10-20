import { ToastContainer } from "react-toastify";
import RoutesMain from "./routes";
import TechProvider from "./Contexts/TechContext";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
        <TechProvider>
          <RoutesMain />
        </TechProvider>

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
