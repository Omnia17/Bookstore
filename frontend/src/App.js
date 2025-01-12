import React from 'react';
import {  Routes, Route } from "react-router-dom";
import "./assets/css/style.css";

import Login from './components/login'; // Your login component
import Dashboard from './components/dashboard'; // Your dashboard component

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

          {/* Add more routes here */}
      </Routes>
    </div>
  );
};

export default App;
