import React, { useState } from 'react';
import './signup.css';
import user_icon from '../Assets/email.png';
import email_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loginnavbar from '../loginnavbar/loginnavbar'; 




const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/register', formData)
      .then(response => {
        console.log(response.data);
        navigate('/login');
      })
      .catch(error => {
        console.error('There was an error registering the user!', error);
      });
  };

  return (
    <div className="Container">
            <Loginnavbar/>

      <div className="Header">
        <div className="text">SIGN UP</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="submit-container">
          <button className="submit" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
