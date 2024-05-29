import React from 'react';
import Home from './Home';
import Signup from './components/signup/signup';
import LoginSignup from './components/login/loginsignup';
import ADMINHome from './components/adminhome/adminhome';
import UserHome from './components/user/userhome';



import { BrowserRouter, Routes,Route } from 'react-router-dom';



function App() {

   


  return (
   
      <BrowserRouter>

      <Routes>
      <Route path="" element={<Home />}></Route>
        
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/adminhome" element={<ADMINHome />} />
      <Route path="/userhome" element={<UserHome />} />





        

      </Routes>
      </BrowserRouter>
  
  
  );
}

export default App;


