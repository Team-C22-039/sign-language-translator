import React from "react"
import { BsFillMicFill } from "react-icons/bs"

export default function MicInput(props) {
    const [micOn, setMicOn] = React.useState(false)

    return (
        <button id="mic-input" className={`p-3 bg-slate-100 h-min w-min border-[1px] border-black rounded-xl
        hover:bg-slate-300 active:bg-slate-500 cursor-pointer transition-all ease-in duration-100 ${props.className}`}
            onClick={() => { micOn === false ? setMicOn(true) : setMicOn(false) }}>
            <BsFillMicFill className="text-2xl text-black" />
        </button>
    )
}