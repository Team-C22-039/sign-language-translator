// /*eslint-disable */
import React, { useState, useEffect } from "react";
import $ from 'jquery';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { BsFillMicFill } from "react-icons/bs";

export default function MicInput(props) {
    const inputText = document.querySelector('#text-input')
    const [isListening, setIsListening] = useState(false)

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const startListening = () => {
        SpeechRecognition.startListening({ language: 'id-ID', continuous: true })
    }

    useEffect(() => {
        if (isListening) {
            console.log(listening)
            resetTranscript()
            startListening()
            $('#mic-logo').addClass('text-red-700')
            $('#mic-logo').removeClass('text-black')
        } else if (!isListening) {
            console.log(listening)
            SpeechRecognition.stopListening()
            $('#mic-logo').removeClass('text-red-700')
            $('#mic-logo').addClass('text-black')
            $(inputText).val(transcript)
        }
    }, [isListening, inputText, resetTranscript, transcript, listening])

    if (!browserSupportsSpeechRecognition) {

        return (
            <></>
        )
    }

    return (
        <>
            <button id="mic-input" className="p-2 md:p-3 bg-slate-100 h-min w-min border-[1px] border-black rounded-lg md:rounded-xl
        hover:bg-slate-200 active:bg-slate-400 cursor-pointer transition-all ease-in duration-100" onClick={() => { setIsListening((isListening) => !isListening) }}>
                <BsFillMicFill id="mic-logo" className="text-lg md:text-2xl text-black" />
            </button>
        </>
    )
}