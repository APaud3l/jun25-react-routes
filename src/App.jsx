import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <nav>
        {/* Navigation using Link  */}
        {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}

        {/* Navitaion using NavLink */}
        <NavLink
          to="/"
          style={({ isActive }) => ({
            marginRight: "1rem",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            marginRight: "1rem",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
