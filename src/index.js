import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* eslint-disable */
const header = ReactDOM.createRoot(document.getElementById('header'));

header.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const footer = ReactDOM.createRoot(document.getElementById('footer'));