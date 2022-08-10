import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* -------Pages --------- */
import NavBar from "./components/Navigate";
import LandingPage from "./components/LandingPage";
import Footer from "./components/footer";
import Destination from "./Pages/Destination";
import CreateDestination from "./Pages/CreateDestination";
import NotFoundPage from "./Pages/NotFoundPage";

/* ---------------------- */
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/destination/review-destination/:id"
          element={<Destination />}
        />
        <Route path="/destination/create" element={<CreateDestination />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
