import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Manohar</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
        <button className="button n-button">Home</button>
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
        <button className="button n-button">Skills</button>
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
        <button className="button n-button">Projects</button>
              </Link>
            </li><li>
              <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
