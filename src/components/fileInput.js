import React from "react";

export default function FileInput() {
    return (
        <div>
            <label for="input-file">
                <span className="sr-only">Choose Audio File</span>
                <input type="file" className="block text-[12px] bg-black rounded-md p-2 pl-3
                text-white w-full
                file:mr-3 file:text-transparent
                file:opacity-0 file:absolute
                file:rounded-lg file:text-center
                file:border-none file:p-[0.6rem]
                hover:file:bg-slate-800 file:text-sm
                sm:pl-0 sm:p-0 sm:rounded-lg sm:bg-slate-300
                sm:text-lg sm:text-black sm:inline-block
                sm:file:opacity-100 sm:file:relative
                sm:file:bg-black sm:file:text-white
                sm:file:text-lg" accept=".wav .mp3" />
            </label>
        </div>
    )
}