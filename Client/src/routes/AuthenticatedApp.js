import { Routes, Route } from "react-router-dom";

import LoginPage from "../Pages/Authentication/login";
import NotFoundPage from "../Pages/NotFoundPage";
import LandingPage from "../Pages/LandingPage/LandingPage";
import RegistPage from "../Pages/Authentication/Regist";
import CreateDestination from "../Pages/AuthenticatedApp/CreateDestination";
import SeeAllDestinations from "../Pages/seeAllDestination/SeeAllDestinations";

export default function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/destination/create" element={<CreateDestination />} />
      {/* ------------------- */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegistPage />} />
      <Route path="/login" element={<LoginPage />} />{" "}
      <Route path="/seeAlldestinations" element={<SeeAllDestinations />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* Just for test Route Start Here ------------------------------------ */}
    </Routes>
  );
}
