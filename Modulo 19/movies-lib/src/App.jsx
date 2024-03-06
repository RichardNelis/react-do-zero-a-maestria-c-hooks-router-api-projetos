import "./App.css";
import { Outlet } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
