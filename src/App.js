import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import SeriesDetails from "./components/SeriesDetails";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TVShows from "./pages/TVShows";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
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
