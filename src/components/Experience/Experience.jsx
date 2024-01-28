import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
    <center><div style={{color:'rgb(241, 207, 11)',fontSize:'40px'}}>
          SKILL SET
      </div></center>
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>80%</div>
        <span  style={{color: darkMode?'white':''}}>html and Css</span>
      </div>

      
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>70%</div>
        <span  style={{color: darkMode?'white':''}}>java script</span>
      </div>


      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>60%</div>
        <span  style={{color: darkMode?'white':''}}>reactjs</span>
      </div>

      
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>70%</div>
        <span  style={{color: darkMode?'white':''}}>java</span>
      </div>
    
     <div className="achievement">
     <div className="circle" style={{color: darkMode?'var(--orange)':''}}>90%</div>
     <span  style={{color: darkMode?'white':''}}>pytnon</span>
   </div>

   <div className="achievement">
     <div className="circle" style={{color: darkMode?'var(--orange)':''}}>90%</div>
     <span  style={{color: darkMode?'white':''}}>pytnon</span>
   </div>


   <div className="achievement">
     <div className="circle" style={{color: darkMode?'var(--orange)':''}}>90%</div>
     <span  style={{color: darkMode?'white':''}}>pytnon</span>
   </div>

   <div className="achievement">
     <div className="circle" style={{color: darkMode?'var(--orange)':''}}>90%</div>
     <span  style={{color: darkMode?'white':''}}>pytnon</span>
   </div>

   <div className="achievement">
     <div className="circle" style={{color: darkMode?'var(--orange)':''}}>90%</div>
     <span  style={{color: darkMode?'white':''}}>pytnon</span>
   </div>

   <div className="achievement">
     <div className="circle" style={{color: darkMode?'var(--orange)':''}}>90%</div>
     <span  style={{color: darkMode?'white':''}}>pytnon</span>
   </div>

   <div className="achievement">
     <div className="circle" style={{color: darkMode?'var(--orange)':''}}>90%</div>
     <span  style={{color: darkMode?'white':''}}>pytnon</span>
   </div>
   </div>
   </>
  );
};

export default Experience;
