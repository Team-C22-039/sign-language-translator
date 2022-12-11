import React from "react"
import $ from "jquery"
import { BsFillMoonFill, BsSun } from "react-icons/bs"

export default function Switch() {
    const [darkMode, setDarkMode] = React.useState(false)
    let theme = localStorage.getItem('theme');
    if (!theme) {
        theme = localStorage.setItem('theme', 'light')
    }

    React.useEffect(() => {
        const body = document.body
        $(body).addClass(`bg-[#E4E4E4] transition-colors ease--in-out duration-300 scroll-smooth scrollbar-thin scrollbar-track-[#BFBFBF]
        scrollbar-thumb-[#ffffff]`)
        const header = document.getElementById('head');
        $(header).addClass('bg-[#58A9E8] p-5 transition-colors ease-in-out duration-300 flex')
        const toggle_ball = document.querySelector('#toggle-inner')
        const toggle_box = document.querySelector('#toggle')
        const img = document.querySelector('#image-box')
        const sun = document.querySelector('#sun')
        const moon = document.querySelector('#moon')
        const inpBox = document.querySelector('#input-box')

        // If dark mode is enabled - adds classes to update dark-mode styling.
        // Else, removes and styling is as normal.
        if (darkMode) {
            localStorage.setItem('theme', 'dark')
            $(body).addClass('bg-[#202020] text-white')
            $(toggle_box).addClass('drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] bg-black')
            $(toggle_box).removeClass('drop-shadow-[0_0_7px_rgba(0,0,0,0.7)] bg-white')
            $(toggle_ball).addClass('ml-[20px] md:ml-[42px] bg-white')
            $(toggle_ball).removeClass('bg-black')
            $(moon).addClass('opacity-100')
            $(moon).removeClass('opacity-0')
            $(sun).addClass('opacity-0')
            $(img).addClass('drop-shadow-[2px_2px_10px_rgba(255,255,255,0.6)]')
            $(img).removeClass('drop-shadow-[2px_2px_10px_rgba(0,0,0,0.6)]')
            $(inpBox).addClass('drop-shadow-[0_0_7px_rgba(255,255,255,0.2)]')
            $(inpBox).removeClass('drop-shadow-[0_0_7px_rgba(0,0,0,0.2)]')
            // $(footer).addClass('bg-[#79A9D1]')
        } else {
            localStorage.setItem('theme', 'light')
            $(body).removeClass('bg-[#202020] text-white')
            $(toggle_box).removeClass('drop-shadow-[0_0_7px_rgba(255,255,255,0.7)] bg-black')
            $(toggle_box).addClass('drop-shadow-[0_0_7px_rgba(0,0,0,0.7)] bg-white')
            $(img).removeClass('drop-shadow-[2px_2px_10px_rgba(255,255,255,0.6)]')
            $(img).addClass('drop-shadow-[2px_2px_10px_rgba(0,0,0,0.6)]')
            $(inpBox).addClass('drop-shadow-[0_0_7px_rgba(0,0,0,0.2)]')
            $(inpBox).removeClass('drop-shadow-[0_0_7px_rgba(255,255,255,0.2)]')
            $(toggle_ball).removeClass('ml-[20px] md:ml-[42px] bg-white')
            $(toggle_ball).addClass('bg-black')
            $(moon).addClass('opacity-0')
            $(moon).removeClass('opacity-100')
            $(sun).removeClass('opacity-0')
            // $(footer).removeClass('bg-[#79A9D1]')
        }
    }, [darkMode])

    return (
        <div
            id="toggle"
            className="w-[50px] md:w-[100px] p-[5px] md:py-2 md:flex block bg-white rounded-full
            absolute right-5 md:right-4 xl:right-6 top-6 md:top-4 drop-shadow-[0_0_7px_rgba(0,0,0,0.7)]
            transition-all ease-out duration-500"
            onClick={() => { darkMode === false ? setDarkMode(true) : setDarkMode(false) }}
        >
            <div id="moon" className="absolute md:ml-[0.2rem] xl:ml-[0.3rem] md:my-[0.1rem] md:text-3xl transition-all duration-150 ease-linear text-white opacity-0">
                <BsFillMoonFill />
            </div>
            <div id="sun" className="absolute ml-6 md:ml-[3.25rem] xl:ml-14 md:my-[0.1rem] md:text-3xl transition-all duration-150 ease-linear text-black">
                <BsSun />
            </div>
            <div id="toggle-inner" className="
            w-[20px] h-[15px] md:w-[40px] md:h-[34px] bg-black rounded-full
            md:relative md:left-1 transition-all ease-in duration-[0.3s]" />
        </div>
    )
}