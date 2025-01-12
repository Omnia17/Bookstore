import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import for React 18
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { Provider } from "react-redux";
import store from './redux/store';  // Make sure the store is correctly exported

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root
root.render(  // Use root.render instead of ReactDOM.render
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>

    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
