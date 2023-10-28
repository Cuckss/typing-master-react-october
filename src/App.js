import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header';
import TypingBox from './Components/TypingBox';
//import Scores from './Components/Scores';
import Footer from './Components/Footer';
// import Reset from './Components/Reset';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import "./fonts.css";
import { Routes,Route } from 'react-router-dom';
// function App() {
  
// const[theme,setTheme]=useState({
//   backgroundColor:'black',
//   color:'yellow'
// })
// const[count,setCount]=useState(0);
//   return (
//     <div  className="my-component" style={{backgroundColor:theme.backgroundColor,color:theme.color}}>
//      <Header/>
//      <Routes>
      
//       <Route path='' element={<TypingBox setCount={setCount}/>}>
//       < Route path='' element={<Reset/>}/>
//       </Route>
//       <Route path='/scores' element={<Scores count={count}/>}/>
//      </Routes>
    
    
//      <Footer setTheme={setTheme}/>
//     </div>
//   )
// }

// export default App;





function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignupPage, setShowSignupPage] = useState(false);

  const handleIconClick = () => {
    setShowLoginPage(true);
    setShowSignupPage(true);
  };
  return (
    <div className="App">
      <Navbar onUserIconClick={handleIconClick} />
      {showLoginPage && (
        <div className="login-overlay">
          <Login />
        </div>
      )}
      {showSignupPage && (
        <div className="login-overlay">
          <Signup />
        </div>
      )}

      <Tyingbox />
      <Footer />
    </div>
  );
}

export default App;