import React, { useState } from "react";
import InputBox from "./InputBox";
import { ImageOutput } from "./ImageOutput";

export default function FormSubmit() {
	const [imgResult, setImgResult] = useState(require("./images/Dummy.jpg"));
	const [textInput, setTextInput] = useState("");

	const convertToSign = (word) => {
		let textSentence = word;
		textSentence
			.toUpperCase()
			.split("")
			.filter((letter) => /[a-z ]/i.test(letter))
			.forEach((letter, index) => {
				setTimeout((_) => {
					letter = letter !== " " ? letter : "SPACE";
					if (letter === "SPACE") {
						setTextInput(letter);
						setImgResult("../../image/Space.jpg");
						return;
					}
					setTextInput(letter);
					setImgResult(
						`https://alphabetizer.flap.tv/lists/images/Sign_Language_${letter}.jpg`
					);
					// letter = letter !== " " ? letter : "Space";
					// setTextInput(letter);
					// if (letter !== " ") {
					// 	setImgResult(
					// 		`https://alphabetizer.flap.tv/lists/images/Sign_Language_${letter}.jpg`
					// 	);
					// } else {
					// 	setImgResult("../../images/Space.jpg");
					// 	setImgResult(`https://i.ibb.co/R9hTX9m/Space.jpg`);
					// }
				}, index * 1000);
			});
	};

	const textSubmit = (e) => {
		e.preventDefault();
		convertToSign(e.target.sentence.value);
	};

	return (
		<div className="flex flex-col xl:flex-row sm:gap-x-12 gap-y-[40px] justify-evenly transition-all ease-in duration-200">
			<ImageOutput imgResult={imgResult} textInput={textInput} />
			<InputBox textSubmit={textSubmit} />
		</div>
	);
}
