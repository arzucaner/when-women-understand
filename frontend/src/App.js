import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import RegistrationPage from "./pages/RegistrationPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <div className="App">
        <HomePage />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </>
  );
}

export default App;
