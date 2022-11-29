import "./App.css";
import Main from "./components/main";
import { Navbar } from "./components/navbar";
import SignRecognition from "./components/SignRecognition";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <SignRecognition />
    </div>
  );
}

export default App;
