import React from 'react';
import {  Routes, Route } from "react-router-dom";
import "./assets/css/style.css";

import Login from './components/login'; // Your login component
import Dashboard from './components/dashboard'; // Your dashboard component
import Register from './components/register';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />

          {/* Add more routes here */}
      </Routes>
    </div>
  );
};

export default App;
