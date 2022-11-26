import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const header = ReactDOM.createRoot(document.getElementById("header"));


header.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
