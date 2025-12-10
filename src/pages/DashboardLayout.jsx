import { NavLink, Outlet } from "react-router-dom";
import { StyledNavLink } from "../components/NavBar";

function DashboardLayout() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <aside>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <StyledNavLink to="/dashboard" end>Overview</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/dashboard/profile">Profile</StyledNavLink>
          </li>{" "}
          <li>
            <StyledNavLink to="/dashboard/settings">Settings</StyledNavLink>
          </li>
        </ul>
      </aside>

      <main style={{ borderLeft: "1px solid #7a6cd7ff", paddingLeft: "1rem" }}>
        {/* Supposed to have components that dynamically change based on which aside nav is clicked */}
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
