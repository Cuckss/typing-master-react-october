// import React,{useState} from 'react';

// const Footer=({setTheme})=>{
//     const handleThemeChange=(event)=>{
//         if(event.target.value==="Darken-Black"){
//             setTheme({backgroundColor:'black',color:'white'})
//         }
//         else if(event.target.value==="Coloured-Grey"){
//             setTheme({backgroundColor:'grey',color:'black'})
//         }
//         else if(event.target.value==="Coloured-Pink"){
//             setTheme({backgroundColor:'black',color:'yellow'})
//         }
//         else if(event.target.value==="Coloured-Green"){
//             setTheme({backgroundColor:'green',color:'black'})
//         }
//         else if(event.target.value==="Coloured-Blue"){
//             setTheme({backgroundColor:'blue',color:'black'})
//         }
//         else if(event.target.value==="Lighten-White"){
//             setTheme({backgroundColor:'white',color:'grey'})
//         }
//         else if(event.target.value==="Coloured-LightPurple"){
//             setTheme({backgroundColor:'purple',color:'black'})
//         }
//     }
//     return(
//         <div>
//            <select onChange={handleThemeChange}>
//             <option>Darken-Black</option>
//             <option>Coloured-Grey</option>
//             <option>Coloured-Pink</option>
//             <option>Coloured-Green</option>
//             <option>Coloured-Blue</option>
//             <option>Lighten-White</option>
//             <option>Coloured-LightPurple</option>
//            </select>
//         </div>
//     )
// }
// export default Footer;







import React, { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [selectedcolor, setSelectedColor] = useState("black");
  const handleColorChange = (e) => {
    setSelectedColor((document.body.style.backgroundColor = e.target.value));
  };
  return (
    <div className="footersection">
      <div className="icons">
        <FaGithub size={30} color="white" />
        <FaLinkedin size={30} color="white" />
        <GrMail size={30} color="white" />
        <FaInstagram size={30} color="white" />
      </div>

      <div className="colorchange">
        <select id="themecolor" onChange={handleColorChange}>
          <option value="black">Black</option>
          <option value="lightblue">Light-Blue</option>
          <option value="green">Green</option>
          <option value="lightgray">Gray</option>
          <option value="lightpink">Light-Pink</option>
        </select>
        {/* <div
          className="themecontent"
          style={{ backgroundColor: selectedcolor }}
        >
          <p>Hello my name is Anamika</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;