// /*eslint-disable */
import React, { useState, useEffect } from "react";
import $ from 'jquery';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { BsFillMicFill } from "react-icons/bs";

export default function MicInput(props) {
    const inputText = document.querySelector('#text-input')
    const mic = document.querySelector('#mic-input')
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

    const handleRecord = () => {
        $(mic).click(() => {
            setIsListening((isListening) => !isListening)
        })
        if (isListening) {
            console.log('Microphone active')
            resetTranscript()
            startListening()
            $('#mic-logo').addClass('text-red')
            $('#mic-logo').removeClass('text-black')
        } else {
            console.log('Microphone deactivate')
            SpeechRecognition.stopListening()
            $(inputText).val(transcript);
        }
    }

    useEffect(() => {
        handleRecord()
    }, [isListening])

    if (!browserSupportsSpeechRecognition) {

        return (
            <></>
        )
    }

    return (
        <>
            <button id="mic-input" className="p-2 md:p-3 bg-slate-100 h-min w-min border-[1px] border-black rounded-lg md:rounded-xl
        hover:bg-slate-200 active:bg-slate-400 cursor-pointer transition-all ease-in duration-100">
                <BsFillMicFill id="mic-logo" className="text-lg md:text-2xl text-black" />
            </button>
        </>
    )
}