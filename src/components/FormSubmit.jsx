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
					letter = letter !== " " ? letter : "Space";
					setTextInput(letter);
					setImgResult(
						`https://alphabetizer.flap.tv/lists/images/Sign_Language_${letter}.jpg`
					);
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
