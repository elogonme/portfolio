import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link"
                  : "nav-link"
              }>
                About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
