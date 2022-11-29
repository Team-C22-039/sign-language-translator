import React from "react"
import MicInput from "./micBtn"

export default function TextInput() {
    React.useEffect(() => {

    })

    return (
        <>
            <textarea className="w-[20vw] h-[20vh] font-Poppins text-xl border-none focus-within:border-none" placeholder="Masukkan teks disini.."></textarea>
        </>
    )
}