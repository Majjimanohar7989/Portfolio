import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hai.. I Am</span>
          <span>Manohar Majji</span>
          <span style={{fontSize:"1rem"}}>
         Welcome! I'm a skilled Full Stack Developer, passionate about creating robust web applications. Proficient in JavaScript, HTML, CSS, React, and Node.js, I seamlessly bridge front-end design with efficient back-end implementation. With a track record of delivering creative and technically excellent projects, my portfolio showcases the fusion of design and functionality. My commitment to staying current with industry trends positions me as a versatile and forward-thinking developer. </span>
        </div>
        <a href={Resume} download>
          <button className="button s-button">RESUME</button>
        </a>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Majjimanohar7989" target="_blank"><img src={Github} alt="github link" /></a>
          <a href="https://www.linkedin.com/in/majji-manohar-3a916126a/" target="_blank"><img src={LinkedIn} alt="linkedin link" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        {/*
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */
        /*}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}{/*
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>
         */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
