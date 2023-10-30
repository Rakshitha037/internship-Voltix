
// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../../utils/baseUrl';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        localStorage.setItem("token", response.data.token);
       
        // Set the success message and clear any previous error
        setSuccessMessage('User logged in successfully');
        setError('');

        // You may redirect to another page or perform other actions
        navigate("/");

      } else {
        console.error('Login failed:', response.data);
        setError('Login failed. Please check your credentials.'); // Set error message
        setSuccessMessage(''); // Clear success message
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again later.'); // Set generic error message
      setSuccessMessage(''); // Clear success message
    }
  };

  return (
    <div className="login-container">

      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default Login;