import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Main() {
  const [textResult, setTextResult] = useState("");
  const [imResult, setImageResult] = useState("../images/catto.jpg");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.sentence.value);
    var textSentence = e.target.sentence.value;
    textSentence
      .split("")
      .filter((letter) => /[a-z ]/i.test(letter))
      .forEach((letter, index) => {
        setTimeout((_) => {
          letter = letter !== " " ? letter : "Space";
          setTextResult(letter);
          setImageResult(`../images/Alphabet-img/` + letter + `.jpg`);
        }, index * 1000);
      });
  }

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  

  return (
    <div className="bg-[#E4E4E4]">
      <div className="container flex justify-around">
        <div className="flex flex-col items-center container-img border-2 border-black m-28 p-20">
          <img
            src={imResult}
            className="h-56 w-56 aspect-square"
            alt="image_result"
            id="imageResult"
          />
          <h1>{textResult}</h1>
        </div>
        <div className="flex-col m-28 ">
          <div className="input_container">
            <div className="flex justify-center">
              <div className="mb-3 xl:w-96">
                <form onSubmit={handleSubmit}>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Text ke Gambar :
                  </label>
                  <textarea
                    className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="sentence"
                    placeholder="Masukkan Text"
                  />
                  <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="upload">
            <form className="flex items-center space-x-6 mt-10">
              <div className="shrink-0"></div>
              <label className="block">
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 hover:cursor-pointer py-20"
                />
              </label>
            </form>
          </div>

          <div>
            <p>Microphone : {listening ? "on" : "off"}</p>
            <div className="flex-col space-x-2 justify-center">
              <button
                type="button-start"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase 
              rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={SpeechRecognition.startListening}
              >
                Start
              </button>
              <button
                type="button-stop"
                className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase 
              rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={SpeechRecognition.stopListening}
              >
                Stop
              </button>
              <button
                type="button-reset"
                className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase 
              rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={resetTranscript}
              >
                Reset
              </button>

              <p id="callback" className="mt-5">
                {transcript}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
<></>;
export default Main;
