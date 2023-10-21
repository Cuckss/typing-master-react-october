import React,{useState} from 'react';

const Footer=({setTheme})=>{
    const handleThemeChange=(event)=>{
        if(event.target.value==="Darken-Black"){
            setTheme({backgroundColor:'black',color:'white'})
        }
        else if(event.target.value==="Coloured-Grey"){
            setTheme({backgroundColor:'grey',color:'black'})
        }
        else if(event.target.value==="Coloured-Pink"){
            setTheme({backgroundColor:'black',color:'yellow'})
        }
        else if(event.target.value==="Coloured-Green"){
            setTheme({backgroundColor:'green',color:'black'})
        }
        else if(event.target.value==="Coloured-Blue"){
            setTheme({backgroundColor:'blue',color:'black'})
        }
        else if(event.target.value==="Lighten-White"){
            setTheme({backgroundColor:'white',color:'grey'})
        }
        else if(event.target.value==="Coloured-LightPurple"){
            setTheme({backgroundColor:'purple',color:'black'})
        }
    }
    return(
        <div>
           <select onChange={handleThemeChange}>
            <option>Darken-Black</option>
            <option>Coloured-Grey</option>
            <option>Coloured-Pink</option>
            <option>Coloured-Green</option>
            <option>Coloured-Blue</option>
            <option>Lighten-White</option>
            <option>Coloured-LightPurple</option>
           </select>
        </div>
    )
}
export default Footer;