import React from 'react';
import Home from './Home';
import Signup from './components/signup/signup';
import LoginSignup from './components/login/loginsignup';
import ADMINHome from './components/adminhome/adminhome';
import UserHome from './components/user/userhome';
import AddCategory from './components/catagory/catagory';
import AddBook from './components/book/bookadd';
import MemberReg from './components/signup/signup';




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
      <Route path="/add_category" element={<AddCategory />} />
      <Route path="/addbook" element={<AddBook />} />
      <Route path="/memberreg" element={<MemberReg />} />








        

      </Routes>
      </BrowserRouter>
  
  
  );
}

export default App;


