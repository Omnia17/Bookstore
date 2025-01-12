// src/pages/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <p>Please login to view this page.</p>;
  }

  if (!user) {
    return <p>Loading user information...</p>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Welcome, {user.name}</h3>
        <p>Your email: {user.email}</p>
      </div>
    </div>
  );
};



export default Dashboard;
