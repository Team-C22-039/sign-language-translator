/* eslint-disable */
import React, { useState } from "react";
import "./style.css";

export default function App() {
    let [mode, setMode] = useState("light");
    function handleClick() {
        setMode(mode == "light" ? "dark" : "light");
    }
    return (
        <div className={'app ' + mode}>
            <h1>This is a Day/Night Toggle Website</h1>
            <div className="btn-box">
                <button onClick={handleClick}>Toggle</button>
            </div>
        </div>
    );
}