import React from "react";

export default function FileInput(props) {
    return (
        <div className={`p-[0.50rem] rounded-lg ${props.className}`}>
            <label for="input-file">
                <span className="sr-only">Choose Audio File</span>
                <input type="file" className="block md:inline-block text-[12px] md:text-lg 
                rounded-lg bg-slate-300 w-full
                text-black file:mr-3
                file:rounded-lg file:text-center
                file:bg-black file:text-white
                file:border-none file:p-[0.6rem]
                hover:file:bg-slate-800
                md:file:text-lg" accept=".wav .mp3" />
            </label>
        </div>
    )
}