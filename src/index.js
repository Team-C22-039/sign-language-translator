import './index.css'
import 'flowbite'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BsGithub } from "react-icons/bs"
import Switch from './components/modeSwtich'
import ImageOutput from './components/imageOutput'
import Creator from './components/creator'
import Copyright from './components/copyright'
import InputBox from './components/inputBox'
import MainContent from './components/SIBIPage'

/* eslint-disable */
const header = ReactDOM.createRoot(document.getElementById('head'));

header.render(
    <React.StrictMode>
        <h2 id='product-name' className='font-Poppins text-white
        text-sm sm:text-xl md:text-3xl transition-all ease-in duration-200 my-1 float-left'>Sign Language Translator</h2>
        <Switch />
    </React.StrictMode>
)

const main = ReactDOM.createRoot(document.getElementById("content"));

main.render(
    <React.StrictMode>
        <div className='flex flex-col xl:flex-row mx-3 md:mx-auto justify-evenly'>
            <ImageOutput />
            <InputBox />
        </div>
        <hr className="border-2 rounded-md mt-64 border-slate-500 mx-auto w-[85vw]" />
        <h1 className="my-12 text-center text-3xl lg:text-4xl xl:text-6xl font-Poppins">Bahasa Isyarat Indonesia</h1>
        <MainContent />
    </React.StrictMode>
)

const footer = ReactDOM.createRoot(document.getElementById('foot'));

footer.render(
    <React.StrictMode>
        <h2 className='text-2xl md:text-3xl mx-4 my-5 md:my-5 font-Poppins transition-all ease-in-out duration-300 text-white'>Creator</h2>
        <div className='flex flex-col md:flex-row md:flex-wrap text-base md:text-lg mx-4 gap-x-[100px] md:my-[-6px]
        transition-all ease-in-out duration-300'>
            {/* <h2 className="text-xl md:text-4xl">Creator</h2> */}
            <Creator creator="Nico Siahaan" />
            <Creator creator="Asyqor Thoriq" />
            <Creator creator="Rayhanantha Akbar Putra Prasetyo" />
            <Creator creator="Grivia Trifosa Iskandar" />
        </div>
        <div className='flex mt-4 mx-4 cursor-pointer'>
            <BsGithub className='mx-2 text-2xl text-white hover:text-[#DFDFDF]' />
        </div>
        <Copyright />
    </React.StrictMode>
)