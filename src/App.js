import "./App.css";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider,useDarkMode } from "./Context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
