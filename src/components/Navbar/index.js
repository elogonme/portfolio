import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import elIcon from "../../images/el-icon.png"

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info" title="major navigation">
      <img src={elIcon} width="32" height="32" alt="el icon" className="el-icon mx-2" />
      <Link href="/" className="navbar-brand mb-0 h1 zoom-xs animate__animated animate__pulse" to="/">
        <span className="d-none d-sm-block">Eldar Humbatov</span>
      </Link>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto float-right">
          <li className="nav-item">
            <NavLink to="/contact"
              className="nav-link" activeClassName="active"> 
                Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/portfolio"
              className="nav-link" activeClassName="active" >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about"
                className="nav-link" activeClassName="active" >
                About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
