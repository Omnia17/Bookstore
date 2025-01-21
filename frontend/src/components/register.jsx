import React, { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../redux/actions/registerAction'; // Import your register action

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:'',
  });
  

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.register);
  const [errors,setErrors] = useState(null);
 
 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      setErrors('Passwords do not match');
      return;
    }
    setErrors(null);

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    // Dispatch the register action with JSON data
    dispatch(register(userData))
    .then(() => {
      // On success, redirect to login page
      navigate('/login');
    })
    .catch((err) => {
      // Handle errors, if any
      setErrors(err?.response?.data?.message || 'Registration failed');
    }); 
   };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create an Account</h2>
        <form onSubmit={handleSubmit} className="register-form">
            
        <input
         className="register-input"
            placeholder="Enter your name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            className="register-input"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            className="register-input"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
            <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="register-input"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors && <p style={{ color: 'red' }}>{errors}</p>}
          <button type="submit" className="register-btn">Register</button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p className="register-footer">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Register;