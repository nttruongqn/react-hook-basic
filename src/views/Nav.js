import { NavLink,NavNavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div class="topnav">
      <NavLink  activeClassName="active" to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/todos">Todos App</NavLink>
      <NavLink activeClassName="active" to="/blog">Blog</NavLink>
      <NavLink activeClassName="active" to="/about">About</NavLink>
    </div>
  );
};

export default Nav;
