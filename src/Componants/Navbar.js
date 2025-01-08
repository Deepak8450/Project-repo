import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <div>
      <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
        <span id="logo-name" className={scrolled ? "scrolled-text" : ""}>
          DS
        </span>
        <ul>
          <li className={scrolled ? "scrolled-text" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={scrolled ? "scrolled-text" : ""}>
            <Link to="/about">About-me</Link>
          </li>
          <li className={scrolled ? "scrolled-text" : ""}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={scrolled ? "scrolled-text" : ""}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <div className="hamburger">
          <input type="checkbox" />
          <div className="lines">
            <span id="line1"></span>
            <span id="line2"></span>
            <span id="line3"></span>
          </div>
          <div className="hamburger-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About-me</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
      
    </div>
  );
}
