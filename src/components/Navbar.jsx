import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../config";
import logo from "../assets/logo.svg";
import Button from "./Button";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = ({ resume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`navbar ${isOpen ? "mobile-navbar" : ""}`}>
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" />
      </Link>
      <ul className={`navbar-nav ${isOpen ? "mobile-nav" : ""}`}>
        {navLinks.map(({ name, url }, index) => (
          <li key={index} className="navbar-nav-item">
            <AnchorLink href={url} className="navbar-nav-link">
              {name}
            </AnchorLink>
          </li>
        ))}
        <li className="navbar-nav-item">
          <Button href={resume}>Resume</Button>
        </li>
      </ul>
      <div className="navbar-bars" onClick={navbarToggle}>
        <i className="fal fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
