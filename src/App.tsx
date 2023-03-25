import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ComicsCartProvider } from "./context/ComicsCartContext";
import { Routes } from "./routes";

function App() {
  return (
    <ComicsCartProvider>
      <>
        <Routes />
        <ToastContainer />
      </>
    </ComicsCartProvider>
  );
}

export default App;
