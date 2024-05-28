import React from 'react';
import Home from './Home';



import LoginSignup from './components/login/loginsignup';
import { BrowserRouter, Routes,Route } from 'react-router-dom';



function App() {

   


  return (
   
      <BrowserRouter>

      <Routes>
        
      <Route path="/login" element={<LoginSignup />} />

        
        <Route path="" element={<Home />}></Route>

      </Routes>
      </BrowserRouter>
  
  
  );
}

export default App;


