import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import RegistrationPage from "./pages/RegistrationPage";
import AboutUsPage from "./pages/AboutUsPage";
import Dashboard from "./pages/Dashboard";
import IdentifyPage from "./pages/IdentifyPage";
import SupportPage from "./pages/SupportPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/identify" element={<IdentifyPage />}></Route>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/support" element={<SupportPage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
