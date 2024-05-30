import './loginsignup.css';
import user_icon from '../Assets/email.png';
import email_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loginnavbar from '../loginnavbar/loginnavbar'; 


function LoginSignup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const passref = useRef(null);

  const handlecreateaccount = () => {
    navigate('/signup');
  };

  const handlesubmit = () => {
    if (username && passref.current.value) {
      let data = {
        password: passref.current.value,
        username: username,
      };
      const headers = {
        'content-type': 'application/json',
      };
      axios.post('http://127.0.0.1:8000/loginview', data, headers)
        .then((res) => {
          const responseData = res.data;
          console.log(responseData)
          console.log(res.data);
          if (responseData.role === 'admin') {
            navigate('/adminhome'); // Redirect to admin panel
          } else {
            navigate('/userhome'); // Redirect to user page
          }

        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('Enter username and password');
    }
  };

  return (
  
    <div className="Home">
      <Loginnavbar/>
       <br />
      <div className="Container">
        <div className="Header">
          <div className="text text-danger text-center"><h1>LOGIN</h1></div>
          <div className="underline text-danger text-center"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="User Name" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" ref={passref} placeholder="Password" />
          </div>
        </div>
        <div className="submit-container">
          <div className="submit">
            <button className="submit" onClick={handlesubmit}>LOGIN</button>
          </div>
        </div>
        <button onClick={handlecreateaccount} className="btn border w-100   bg-primary rounded-0">Create Account</button>
      </div>
    </div>
  );
}

export default LoginSignup;
