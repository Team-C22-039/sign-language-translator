import React, { useState, useEffect } from "react";
import $ from "jquery";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import { BsFillMicFill } from "react-icons/bs";

export default function MicInput(props) {
	const inputText = document.querySelector("#text-input");
	const [isListening, setIsListening] = useState(false);

	useEffect(() => {
		speechHandler();
	}, [isListening]);

	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition();

	const startListening = () => {
		SpeechRecognition.startListening({ language: "id-ID", continuous: true });
	};

	const speechHandler = () => {
		if (isListening) {
			resetTranscript();
			startListening();
			$("#mic-logo").addClass("text-[#FF1212]");
			$("#mic-logo").removeClass("text-white");
		} else {
			SpeechRecognition.stopListening();
			$("#mic-logo").removeClass("text-[#FF1212]");
			$("#mic-logo").addClass("text-white");
			$(inputText).val(transcript);
		}
	};

	if (!browserSupportsSpeechRecognition) {
		alert("Browser not supported with SpeechRecognition");
	}

	return (
		<>
			<button
				id="mic-input"
				type="button"
				className="
            transition-all 0.3 ease-linear
            h-fit w-fit text-white p-4 bg-transparent cursor-pointer rounded-lg inline-block relative outline-none
            border-none bg-gradient-to-br from-[rgba(114,199,255,1)0%] to-[rgba(72,159,216,1)100%] overflow-hidden
            hover:opacity-[0.7] hover:text-white
            before:absolute before:content-[''] before:inline-block
            before:top-[-180px] before:left-0 before:w-[30px] before:h-full
            before:bg-white before:animate-shiny
            shinyBtn
            "
				onClick={() => {
					setIsListening((isListening) => !isListening);
					console.log(!listening ? "Microphone on" : "Microphone off");
				}}
			>
				<BsFillMicFill id="mic-logo" className="text-lg md:text-2xl " />
				<div id="dot"></div>
			</button>
		</>
	);
}
