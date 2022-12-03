import "./App.css";
import ASLAlphabet from "./components/ASLAlphabet";
import Main from "./components/main";
import { Navbar } from "./components/navbar";
import SignRecognition from "./components/SignRecognition";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <ASLAlphabet />
      {/* <SignRecognition /> */}
    </div>
  );
}

export default App;
