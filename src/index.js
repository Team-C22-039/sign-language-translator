import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'flowbite';
import $ from 'jquery';
import Switch from './components/modeSwtich';

/* eslint-disable */
const header = ReactDOM.createRoot(document.getElementById('head'));

header.render(
    <React.StrictMode>
        <h2 id='product-name' className='font-Poppins text-white
        text-xl md:text-3xl transition-all ease-in duration-200 my-1'>Product Name</h2>
        <Switch />
    </React.StrictMode>
)

const footer = ReactDOM.createRoot(document.getElementById('footer'));