import React,{useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const TypingBox=({setCount})=>{
  const[time,setTime]=useState(15);
  const[testStart,setTestStart]=useState(false);
  const[testEnd,setTestEnd]=useState(false);
  // const[countdown,setCountdown]=useState(time);
   const navigate=useNavigate();

  let displaytext =
  "eat happily low wooden fight me frighten distant solve move being tin improve guard unhappy band east capital noun myself strike thought turn weather scientist canal finger roll move wonder settlers camera traffic honor compass victory whose health vast ought fresh dog successful straw these of cheese simply answer finally";
  let keyChar=0; 
  const[inputText,setInputText]=useState("");
  function handleInputChange(e){
        setTestStart(true);
       setInputText(e.target.value);
       
  }
    useEffect(()=>{
     if(testStart===true && time>0){
      const timer=setInterval(()=>{
        setTime(time-1)
      },1000)
    
      return()=>{
        clearInterval(timer)
      }
     }
     else if(time===0){
      setTestEnd(true);
      setTestStart(false)
      console.log("before go..")
      function yourScore(){
        let num=0;
       let resultArr= inputText.split(" ")
        resultArr.forEach((word)=>{
           num++;
            setCount(num);
           
        })
      }
      yourScore();
      navigate("/scores")
     }
    

    },[time,testStart])
  
  
  return(
      <div className='typing-box'>
         <div className='row-1'>
          <div>{time}</div>
          <div>
            <button onClick={()=>{setTime(15)}}>15</button>
            <button onClick={()=>{setTime(30)}}>30</button>
            <button onClick={()=>{setTime(60)}}>60</button>
          </div>
         </div>
         <div className="text-box">
             {/* {displaytext.split("").map((char)=>(<input type='text' value={char}/>))} */}
             {
              <input type='text' placeholder={displaytext} style={{width:"800px",height:"200px"}} onChange={handleInputChange} />
             }
         </div>
         <Outlet/>
      </div>       
    )
}
export default TypingBox;
{/* <span key={'char'+(keyChar++)}>{char}</span>) */}