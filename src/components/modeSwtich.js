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
        $(body).addClass('transition-colour ease--in-out duration-300')
        const header = document.getElementById('head');
        $(header).addClass('bg-[#9747FF] p-5 transition-colour ease-in-out duration-300')
        const toggle = document.querySelector('#toggle-inner');

        theme = localStorage.getItem('theme');

        // If dark mode is enabled - adds classes to update dark-mode styling.
        // Else, removes and styling is as normal.
        if (darkMode === true) {
            localStorage.setItem('theme', 'dark');
            $(body).addClass('bg-[#202020] text-white')
            $(header).addClass('bg-[#3B2166]')
            $(toggle).addClass('ml-[20px]')
        } else {
            localStorage.setItem('theme', 'light');
            $(body).removeClass('bg-[#202020] text-white')
            $(header).removeClass('bg-[#3B2166]')
            $(toggle).removeClass('ml-[20px]')
        }
    }, [darkMode])

    return (
        <div
            id="toggle"
            className="w-[50px] p-[5px] block bg-white rounded-full
            cursor-pointer shadow-lg transition-all ease-in duration-[0.2s]
            fixed right-5 top-7"
            onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
        >
            <div id="toggle-inner" className="
            w-[20px] h-[15px] bg-black rounded-full
            transition-all ease-in duration-[0.2s]" />
        </div>
    )
}