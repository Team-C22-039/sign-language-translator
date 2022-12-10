import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Main() {
  const [isListening, setIsListening] = useState(false);
  const [textResult, setTextResult] = useState("");
  const [imResult, setImageResult] = useState("../images/Dummy.png");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    handleRecord();
  }, [isListening]);

  const resetInput = () => {
    resetTranscript();
    document.getElementById("inputText").value = "";
  };

  const handleRecord = () => {
    if (isListening) {
      // menghapus string yang ada ataupun yang belum ada sebelum mulai rekam
      resetTranscript();

      // start record audio dengan bahasa Indonesia dan terus merekam
      SpeechRecognition.startListening({ language: "id-ID", continuous: true });
    } else {
      // stop record audio
      SpeechRecognition.stopListening();

      // constraint untuk pertama kali web dirender
      if (transcript === "") {
        console.log("Not contain word to convert");
      } else {
        document.getElementById("inputText").value = transcript;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    convertToSign(e.target.sentence.value);
  };

  const convertToSign = (word) => {
    var textSentence = word;
    textSentence
      .toUpperCase()
      .split("")
      .filter((letter) => /[a-z ]/i.test(letter))
      .forEach((letter, index) => {
        setTimeout((_) => {
          letter = letter !== " " ? letter : "Space";
          setTextResult(letter);
          setImageResult(
            `https://alphabetizer.flap.tv/lists/images/Sign_Language_` +
              letter +
              `.jpg`
          );
        }, index * 1000);
      });
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="bg-[#E4E4E4]">
      <div className="flex lg:flex-row md:flex-col flex-col justify-around">
        <div className="flex flex-col items-center container-img border-2 border-black m-28 lg:p-20">
          <img
            src={imResult}
            className="h-56 w-56 aspect-square"
            alt="img-result"
            id="imageResult"
          />
          <h1>{textResult}</h1>
        </div>
        <div className="flex-col lg:m-28 md:m-0">
          <div className="input_container">
            <div className="flex justify-center">
              <div className="mb-3 xl:w-96">
                <div id="microphone">
                  <p className="text-center lg:text-start">
                    Microphone : {listening ? "on" : "off"}
                  </p>
                  <div className="flex flex-row space-x-2 justify-center lg:justify-start">
                    <button
                      type="button-start"
                      className={
                        listening
                          ? "inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase  rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                          : "inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      }
                      onClick={() => setIsListening((prevState) => !prevState)}
                    >
                      {listening ? "Stop" : "Start"}
                    </button>
                    <button
                      type="button-reset"
                      className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase 
                    rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none 
                    focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={resetInput}
                    >
                      Reset
                    </button>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="my-5 flex flex-col">
                  <label
                    htmlFor="input-text"
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
                    id="inputText"
                    rows="3"
                    name="sentence"
                    placeholder="Masukkan Text"
                  />
                  <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3 mx-32"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
