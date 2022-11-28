/* eslint-disable */
import React from "react"
// import './modeSwitch.css'
import $ from "jquery"

export default function Switch() {
    const [darkMode, setDarkMode] = React.useState(false)
    let theme = localStorage.getItem('theme');

    if (!theme) {
        localStorage.setItem('theme', 'light');
    }

    React.useEffect(() => {
        const body = document.body
        $(body).addClass('bg-[#E4E4E4] transition-colors ease--in-out duration-300 scroll-smooth')
        const header = document.getElementById('head');
        $(header).addClass('bg-[#9747FF] p-5 transition-colors ease-in-out duration-300 flex')
        const footer = document.getElementById('foot')
        $(footer).addClass('transition-all ease-in-out duration-300 bg-[#9747FF] text-white flex flex-col min-h-[100vh]')
        const toggle_ball = document.querySelector('#toggle-inner')
        const toggle_box = document.querySelector('#toggle')
        const img = document.querySelector('#image-box')
        theme = localStorage.getItem('theme');

        // If dark mode is enabled - adds classes to update dark-mode styling.
        // Else, removes and styling is as normal.
        if (darkMode === true) {
            localStorage.setItem('theme', 'dark');
            $(body).removeClass('bg-[#E4E4E4]')
            $(body).addClass('bg-[#202020] text-white')
            $(header).addClass('bg-[#3B2166]')
            $(toggle_box).addClass('drop-shadow-[0_0_7px_rgba(255,255,255,0.7)]')
            $(toggle_ball).addClass('ml-[20px] md:ml-[42px]')
            $(img).addClass('drop-shadow-[0_0_7px_rgba(255,255,255,0.4)]')
            $(img).removeClass('drop-shadow-[0_0_7px_rgba(0,0,0,0.4)]')
            $(footer).addClass('bg-[#3B2166]')
        } else {
            localStorage.setItem('theme', 'light');
            $(body).removeClass('bg-[#202020] text-white')
            $(header).removeClass('bg-[#3B2166]')
            $(toggle_box).removeClass('drop-shadow-[0_0_7px_rgba(255,255,255,0.7)]')
            $(img).removeClass('drop-shadow-[0_0_7px_rgba(255,255,255,0.4)]')
            $(img).addClass('drop-shadow-[0_0_7px_rgba(0,0,0,0.4)]')
            $(toggle_ball).removeClass('ml-[20px] md:ml-[42px]')
            $(footer).removeClass('bg-[#3B2166]')
        }
    }, [darkMode])

    return (
        <div
            id="toggle"
            className="w-[50px] md:w-[100px] p-[5px] md:py-2 md:flex block bg-white rounded-full
            fixed right-5 md:right-4 top-6 md:top-4 drop-shadow-[0_0_7px_rgba(0,0,0,0.7)]
            transition-all ease-out duration-500"
            onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
        >

            <div id="toggle-inner" className="
            w-[20px] h-[15px] md:w-[40px] md:h-[34px] bg-black rounded-full
            md:relative md:left-1 transition-all ease-in duration-[0.3s]" />
        </div>
    )
}