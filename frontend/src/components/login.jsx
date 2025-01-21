import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { login } from '../redux/actions/authAction';  // Import action
import ParticlesBackground from './particales';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Create a navigate function
  const { loading, error } = useSelector((state) => state.auth); // Access auth state

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload
    setErrorMessage(''); // Clear any previous error message
    dispatch(login(email, password)) // Dispatch the login action
      .then(() => {
        // On success, navigate to the dashboard
        navigate('/dashboard');
        
      })
      .catch((err) => {
        // On error, set the error message
        setErrorMessage(err.message || 'Login failed, please try again');
        alert('Login nooot Successful');
      });
  };

  return (
    <div  style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <ParticlesBackground /> {/* Add the particle animation */}
    <div className="login-container" style={{ position: "relative", zIndex: 1 }}>
    <div className="login-card">
      <h2 className="login-title">Welcome to Omnia Bookstore</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          className="login-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
      <p className="login-footer">Don't have an account? <a href="/register">Sign Up</a></p>
    </div>
  </div>
  </div>
  );
};

export default Login;
