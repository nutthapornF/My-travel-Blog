import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* -------Pages --------- */
import NavBar from "./components/Navigation/Navigate";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from "./components/Footer/footer";
import Destination from "./Pages/Destinations/Destination";

import CreateDestination from "./Pages/AuthenticatedApp/CreateDestination.js";
import NotFoundPage from "./Pages/NotFoundPage";
import SeeAllDestinations from "./Pages/seeAllDestination/SeeAllDestinations";
import LoginPage from "./Pages/Authentication/login.js";
import RegistPage from "./Pages/Authentication/Regist";

import { NavBarr } from "./components/nav";

import { useAuth } from "./context/AuthProvider.js";

import UnauthenticatedApp from "./routes/UnauthenticatedApp.js";
import AuthenticatedApp from "./routes/AuthenticatedApp.js";
/* ---------------------- */
import "./App.css";

function App() {
  const auth = useAuth();
  // console.log(auth.isAuthenticated);
  // console.log(AuthenticatedApp);
  return (
    <>
      <NavBarr />

      {/* <UnauthenticatedApp /> */}
      {auth.isAuthenticated && <AuthenticatedApp />}
      {!auth.isAuthenticated && <UnauthenticatedApp />}
    </>
  );
}

// function App() {
//   return (
//     <Router>
//       <NavBarr />
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route
//           path="/destination/review-destination/:id"
//           element={<Destination />}
//         />
//         <Route path="/seeAlldestinations" element={<SeeAllDestinations />} />
//         <Route path="/destination/create" element={<CreateDestination />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegistPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

export default App;
