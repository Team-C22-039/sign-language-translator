import React from "react";
import $ from "jquery";

export default function VoiceRecognition() {
	const content = document.getElementById("content");
	$(content).addClass("container box-content mx-auto my-10");

	const [myText, setMyText] = useState("");
	const msg = new SpeechSynthesisUtterance();

	const speechHandler = (msg) => {
		msg.lang = "id-ID";
		msg.text = myText.value;
		window.speechSynthesis.speak(msg);
	};

	const speechTalk = (e) => {
		setMyText(e.target.value);
	};

	return <></>;
}
