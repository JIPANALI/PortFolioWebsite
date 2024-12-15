import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo"><img className="logoImage" src={logo} alt="HeaderLogo" /></div>
      <nav className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => {
            setIsMenuOpen(false);
            scrollToSection("home")
          }}>Home</Link></li>

          <li><Link to="" onClick={() => {
            setIsMenuOpen(false);
            scrollToSection("project")
          }} >Projects</Link></li>

          <li><Link onClick={() => {
            setIsMenuOpen(false);
            scrollToSection("skill")
          }} to="">Skills</Link></li>

          <li><Link onClick={() => {
            setIsMenuOpen(false);
            scrollToSection("education")
          }} to="">Experience</Link></li>

          <li><Link onClick={() => {
            setIsMenuOpen(false);
            scrollToSection("contact")
          }} to="">Contact</Link></li>
        </ul>
      </nav>
      <div className="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
