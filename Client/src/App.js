import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* -------Pages --------- */
import NavBar from "./components/Navigation/Navigate";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from "./components/Footer/footer";
import Destination from "./Pages/Destinations/Destination";
import CreateDestination from "./Pages/CreateDestination";
import NotFoundPage from "./Pages/NotFoundPage";
import SeeAllDestinations from "./Pages/seeAllDestination/SeeAllDestinations";
import LoginPage from "./Pages/Authentication/login.js";
import RegistPage from "./Pages/Authentication/Regist";

import { NavBarr } from "./components/nav";

/* ---------------------- */
import "./App.css";

function App() {
  return (
    <Router>
      <NavBarr />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/destination/review-destination/:id"
          element={<Destination />}
        />
        <Route path="/seeAlldestinations" element={<SeeAllDestinations />} />
        <Route path="/destination/create" element={<CreateDestination />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
