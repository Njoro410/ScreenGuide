import { Routes, Route, useLocation } from "react-router-dom";
import NavbarTop from "./components/NavbarTop";
import ProtectedRoute from "./components/ProtectedRoute";
import SeriesDetails from "./components/SeriesDetails";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TVShows from "./pages/TVShows";
import {useEffect} from "react"

// Scroll to top of page when changing routes
// https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavbarTop />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/series/:id" element={<SeriesDetails />} />
          <Route path="/series" element={<TVShows/>} />
          <Route path="/account" element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>} />
        </Routes>

      </AuthContextProvider>
    </>
  );
}

export default App;
