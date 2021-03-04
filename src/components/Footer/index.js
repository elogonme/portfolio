import React from "react";
import logo from '../../images/react-logo.svg';
import "./style.css";

function Footer() {
  return (
    <footer className="bg-secondary fixed-bottom pb-1">
      <div className="text-light text-sm-center py-2 px-2 footer-text">
        <img src={logo} className="react-logo float-left" alt="logo" />
        <span className="float-left">Built with React</span>
        © 2020 Copyright: Eldar Humbatov
        <div className="float-right mr-4">
          <a href="tel:+1-416-823-4666" target="_blank" rel="noreferrer" title="E-mail" className="text-white">
            <i className="fas fa-phone-square px-2 zoom"></i>
          </a>
          <a href="mailto:eldarha@gmail.com" target="_blank" rel="noreferrer" title="E-mail" className="text-white">
            <i className="fas fa-at px-2 zoom"></i>
          </a>
          <a href="https://www.linkedin.com/in/eldarhumbatov/" target="_blank" rel="noreferrer"  title="LinkedIn" className="text-white">
            <i className="fab fa-linkedin-in px-2 zoom"></i>
          </a>          
          <a href="https://github.com/elogonme" target="_blank" rel="noreferrer"  title="GitHub" className="text-white">
            <i className="fab fa-github px-2 zoom"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
