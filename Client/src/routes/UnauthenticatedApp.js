import { Routes, Route } from "react-router-dom";
// Components --------------------------------------------
// import Navbar from "../components/Navigation/Navbar";
// Pages --------------------------------------------
import LoginPage from "../Pages/Authentication/login";
import RegistPage from "../Pages/Authentication/Regist";
import NotFoundPage from "../Pages/NotFoundPage";
import LandingPage from "../Pages/LandingPage/LandingPage";

export default function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />{" "}
        <Route path="*" element={<NotFoundPage />} />
        {/* Just for test Route Start Here ------------------------------------ */}
      </Routes>
    </div>
  );
}
