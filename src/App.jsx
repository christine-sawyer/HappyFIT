import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage/HomePage';
import { CameraPage } from "./pages/CameraPage/CameraPage";
import { Instructions } from "./pages/Instructions/Instructions";
import { Exercises } from "./pages/Exercises/Exercises";
import { Header } from "./components/Header/Header";

function App() {

  return (
    <BrowserRouter>
    {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="instructions" element={<Instructions />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="camera" element={<CameraPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
