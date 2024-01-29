import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span style={{ color: "black" }}>majjimanohar7989@gmail.com <br/><br/>Phone:7989572341<br/><br/>Parvathi Puram , Andhra Pradesh</span>
      </div>
    </div>
  );
};

export default Footer;
