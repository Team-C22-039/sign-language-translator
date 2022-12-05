import React from "react"
import { BsFillVolumeUpFill } from "react-icons/bs"
import MicInput from "./micBtn"
import FileInput from "./fileInput"

export default function InputBox(props) {
    React.useEffect(() => {

    })

    return (
        <div className={`${props.className}`}>
            <div className="flex md:flex-row">
                <textarea className="p-5 h-[20vh] md:h-[42vh] font-Poppins text-base md:text-xl rounded-t-lg bg-white resize-none 
            border-none focus:ring-2 focus:ring-black flex-grow text-black
            scrollbar-thin scrollbar-track-[#CFD5DD] scrollbar-thumb-black scrollbar-thumb-rounded-2xl scrollbar-thumb-cursor-pointer" placeholder="Masukkan teks disini.."></textarea>
            </div>
            <div id="sound-view" className="bg-white gap-x-4 p-4 rounded-b-xl
            flex items-center justify-end border-t-2 border-t-slate-300 flex-grow-0
            ">
                <FileInput />
                <div>
                    <BsFillVolumeUpFill className="text-[30px] md:text-4xl text-black cursor-pointer hover:text-slate-700
                    transition-all ease-in duration-200" onClick={() => { }} />
                </div>
                <MicInput />
            </div>
        </div>
    )
}