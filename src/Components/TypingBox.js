// import React,{useState} from 'react';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
// const TypingBox=({setCount})=>{
//   const[time,setTime]=useState(15);
//   const[testStart,setTestStart]=useState(false);
//   const[testEnd,setTestEnd]=useState(false);
//   // const[countdown,setCountdown]=useState(time);
//    const navigate=useNavigate();

//   let displaytext =
//   "eat happily low wooden fight me frighten distant solve move being tin improve guard unhappy band east capital noun myself strike thought turn weather scientist canal finger roll move wonder settlers camera traffic honor compass victory whose health vast ought fresh dog successful straw these of cheese simply answer finally";
//   let keyChar=0; 
//   const[inputText,setInputText]=useState("");
//   function handleInputChange(e){
//         setTestStart(true);
//        setInputText(e.target.value);
//       //  while(time>0){
//       //   if(e.target.value==)
//       //  }
       
//   }
//     useEffect(()=>{
//      if(testStart===true && time>0){
//       const timer=setInterval(()=>{
//         setTime(time-1)
//       },1000)
    
//       return()=>{
//         clearInterval(timer)
//       }
//      }
//      else if(time===0){
//       setTestEnd(true);
//       setTestStart(false)
//       console.log("before go..")
//       function yourScore(){
//         let num=0;
//        let resultArr= inputText.split(" ")
//         resultArr.forEach((word)=>{
//            num++;
//             setCount(num);
           
//         })
//       }
//       yourScore();
//       navigate("/scores")
//      }
    

//     },[time,testStart])
  
   
  
//   return(
//       <div className='typing-box'>
//          <div className='row-1'>
//           <div>{time}</div>
//           <div>
//             <button onClick={()=>{setTime(15)}}>15</button>
//             <button onClick={()=>{setTime(30)}}>30</button>
//             <button onClick={()=>{setTime(60)}}>60</button>
//           </div>
//          </div>
//          <div className="text-box">
            
//               {
//             displaytext.split(" ").map((word, index) => (
//               <span className='word'>
//                 {
//                   word.split('').map((char,index) => (
//                     <span key={index} >{char}</span>
//                   ))
//                 }
//                  &nbsp;
//               </span>
//             ))
            
//               } 
//                <input type='text' className='hidden-input' onChange={handleInputChange}/>          
//          </div>
        
//          <Outlet/>
//       </div>       
//     )
// }
// export default TypingBox;
// {/* <span key={'char'+(keyChar++)}>{char}</span>) */}











import React, { useEffect, useState } from "react";

const TypingBox = () => {
  const [timer, setTimer] = useState(15);
  const [wordCount, setWordCount] = useState(50); // Initialize word count to 50
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  let para =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor sed justo laoreet venenatis. Cras ut facilisis turpis. Vivamus in fermentum quam, sed malesuada nunc. Aliquam eu erat non libero sollicitudin semper. Nulla at aliquet justo. Aenean ac nunc id quam vestibulum dignissim. In hac habitasse platea dictumst. Vestibulum volutpat, ex sit amet vestibulum dignissim, arcu justo tincidunt nisi, eu vestibulum sapien risus ut lorem. Sed eget purus sit amet neque dapibus vestibulum. Praesent a diam arcu. Vestibulum interdum leo nec massa vehicula, at elementum ligula volutpat. Sed a volutpat felis. Suspendisse in hendrerit lectus. Curabitur convallis eget ante a fermentum";

  let keychar = 0;

  // Function to update the word count
  const updateWordCount = (count) => {
    setWordCount(count);
  };

  // Split the paragraph into words
  const words = para.split(" ");

  useEffect(() => {
    // Start the timer when isTimerRunning becomes true
    let intervalId;
    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
        if (timer === 1) {
          window.alert("Times up!");
          setIsTimerRunning(false);
          clearInterval(intervalId);
        }
      }, 1000);
    } else {
      // Clear the timer if isTimerRunning becomes false
      clearInterval(intervalId);
    }

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning, timer]);

  const startTimer = (seconds) => {
    setTimer(seconds);
    setIsTimerRunning(true);
  };
  
  const handleKeyDown = () => {
    // Start the timer when a key is pressed
    if (!isTimerRunning) {
      startTimer(timer); // Adjust the initial time as needed
    }
  };

  return (
    <div>
      <div className="row-1">
        <div>{timer}</div>
        <div>
          <button onClick={() => startTimer(15)}>15sec</button>
          <button onClick={() => startTimer(30)}>30sec</button>
          <button onClick={() => startTimer(60)}>60sec</button>
        </div>
      </div>
      <div className="typingbox" onKeyDown={handleKeyDown} tabIndex={0}>
        {/* {para.split("").map((char) => (
          <span key={`char` + keychar++}>{char}</span>
        ))} */}
        {words.slice(0, wordCount).map((word) => (
          <span key={`word` + keychar++}>{word} </span>
        ))}
      </div>
      <div className="wordChangeSection">
        <div className="btn1">
          <button onClick={() => updateWordCount(10)}>10</button>
          <button onClick={() => updateWordCount(50)}>50</button>
          <button onClick={() => updateWordCount(80)}>80</button>
          <button onClick={() => updateWordCount(100)}>100</button>
          <span>-reset no. of words</span>
        </div>
      </div>
    </div>
  );
};

export default TypingBox;