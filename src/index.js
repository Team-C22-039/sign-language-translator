import './index.css'
// import 'flowbite'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BsGithub } from "react-icons/bs"
import Switch from './components/ModeSwtich'
import Creator from './components/Creator'
import MainContent from './components/SIBIPage'
import BgWave from './components/FooterWave'
import FormSubmit from './components/FormSubmit'
import SignRecognition from './components/SignRecognition'

/* eslint-disable */
const header = ReactDOM.createRoot(document.getElementById('head'));

header.render(
    <>
        <h2 id='product-name' className='font-Poppins text-white
        text-sm sm:text-xl md:text-3xl transition-all ease-in duration-200 my-1 float-left'>Sign Language Translator (ASL)</h2>
        <Switch />
    </>
)

const main = ReactDOM.createRoot(document.getElementById("content"));

main.render(
    <React.StrictMode>
        <h1 className='my-[7rem] font-Roboto text-center text-lg md:text-[5rem]'>Audio ke Bahasa Isyarat</h1>
        <div>
            <FormSubmit />
            <SignRecognition />
        </div>
        <hr className="border-2 rounded-md mt-64 border-slate-500 mx-auto w-[85vw]" />
        <h1 className="my-12 text-center text-3xl lg:text-4xl xl:text-6xl font-Poppins">Bahasa Isyarat Indonesia</h1>
        <MainContent />
    </React.StrictMode>
)

const footer = ReactDOM.createRoot(document.getElementById('foot'));

footer.render(
    <>
        <BgWave />
        <div className='content'>
            <h2 className='text-[2.5rem] md:text-[3.5rem] ml-4 font-Poppins transition-all ease-in-out duration-300'>Creator</h2>
            <div className='flex flex-col md:flex-row md:flex-wrap text-base md:text-lg mx-4 gap-x-[100px] md:my-[-6px]
            transition-all ease-in-out duration-300'>
                <Creator creator="Nico Siahaan" />
                <Creator creator="Asyqor Thoriq" />
                <Creator creator="Rayhanantha Akbar Putra Prasetyo" />
                <Creator creator="Grivia Trifosa Iskandar" />
            </div>
            <div className='flex mt-4 mx-4 cursor-pointer'>
                <BsGithub className='mx-2 text-2xl hover:text-[#DFDFDF]' href="https://github.com/Team-C22-039/sign-language-translator.git" />
            </div>
            <div className='md:text-center mt-[2rem] ml-4 md:ml-0 transition-all ease-in-out duration-300'>
                <span className="">&copy;2022 Team C22-039. All Rights Reserved</span>
            </div>
        </div>
    </>
)