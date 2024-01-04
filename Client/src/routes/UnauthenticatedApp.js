import { Routes, Route } from "react-router-dom";
// Components --------------------------------------------
// import Navbar from "../components/Navigation/Navbar";
// Pages --------------------------------------------
// import { NavBar } from "../components/Navigation/Navigate";
import LoginPage from "../Pages/Authentication/login";
import NotFoundPage from "../Pages/NotFoundPage";
import LandingPage from "../Pages/LandingPage/LandingPage";
import RegistPage from "../Pages/Authentication/Regist";
import NavBar from "../components/Navigation/Navigate";
import SeeAllDestinations from "../Pages/seeAllDestination/SeeAllDestinations";
import AboutMePage from "../Pages/aboutMe/aboutMePage";

export default function UnauthenticatedApp() {
  return (
    <Routes>
      {/* <NavBar /> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegistPage />} />
      <Route path="/login" element={<LoginPage />} />{" "}
      <Route path="/nikkiF" element={<AboutMePage />} />{" "}
      <Route path="/seeAlldestinations" element={<SeeAllDestinations />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="/destination/create" element={<CreateDestination />} /> */}
      {/* Just for test Route Start Here ------------------------------------ */}
    </Routes>
  );
}
