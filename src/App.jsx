import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import {NavBar} from "./components/NavBar";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardHome from "./pages/DashboardHome";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* top-level routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* dashboard layout + nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>

        {/* User Route */}
        <Route path="/users/:username" element={<UserPage />} />

        {/* 404 route */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
