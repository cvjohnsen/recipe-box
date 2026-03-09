import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="site-title">My Recipe Box</h1>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Home
        </NavLink>

        <NavLink to="/recipes" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Recipes
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;