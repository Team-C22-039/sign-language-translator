import './index.css'
import 'flowbite'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BsGithub } from "react-icons/bs"
import Switch from './components/modeSwtich'
import ImageOutput from './components/imageOutput'
import Creator from './components/creator'
import Copyright from './components/copyright'
import TextInput from './components/textInput'

/* eslint-disable */
const header = ReactDOM.createRoot(document.getElementById('head'));

header.render(
    <React.StrictMode>
        <h2 id='product-name' className='font-Poppins text-white
        text-xl md:text-3xl transition-all ease-in duration-200 my-1 float-left'>Product Name</h2>
        <Switch />
    </React.StrictMode>
)

const main = ReactDOM.createRoot(document.getElementById("content"));

main.render(
    <React.StrictMode>
        <div className='flex gap-x-10 mx-auto justify-evenly'>
            <ImageOutput className="relative left-0" />
            <hr className='h-[20px]' />
            <TextInput />
        </div>
        <div>

        </div>
    </React.StrictMode>
)

const footer = ReactDOM.createRoot(document.getElementById('foot'));

footer.render(
    <React.StrictMode>
        <h2 className='text-2xl md:text-3xl mx-4 my-5 md:my-5 font-Poppins transition-all ease-in-out duration-300'>Creator</h2>
        <div className='flex text-base md:text-lg mx-4 gap-x-[100px] md:my-[-6px] flex flex-col md:flex-row md:flex-wrap
        transition-all ease-in-out duration-300'>
            {/* <h2 className="text-xl md:text-4xl">Creator</h2> */}
            <Creator creator="Nico Siahaan" />
            <Creator creator="Asyqor Thoriq" />
            <Creator creator="Rayhanantha Akbar Putra Prasetyo" />
            <Creator creator="Grivia Trifosa Iskandar" />
        </div>
        <div className='flex mt-4 mx-4 cursor-pointer'>
            <BsGithub className='mx-2 text-2xl hover:text-[#DFDFDF]' />
        </div>
        <Copyright />
    </React.StrictMode>
)