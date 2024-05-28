import './loginsignup.css'
import user_icon from '../Assets/email.png'
import email_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import React, { useEffect, useState } from 'react';


function LoginSignup() {
    const [action,setAction]=useState("Login");
  return (
    

    <div className="Home">

      Welcome 
      <br />
      <div className="Container">
        <div className="Heeader">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name'/>
          </div>}
          
          
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email' />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' />
          </div>
        </div>

        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>
                Sign Up
                
            </div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>
                LOGIN
            </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default LoginSignup;
