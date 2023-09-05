import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage/HomePage';
import { CameraPage } from "./pages/CameraPage/CameraPage";
import { Instructions } from "./pages/Instructions/Instructions";
import { Exercises } from "./pages/Exercises/Exercises";
import { ExerciseDetails } from "./pages/ExerciseDetails/ExerciseDetails";
import { CameraPagePlank } from "./pages/CameraPagePlank/CameraPagePlank";

// import { Header } from "./components/Header/Header";

function App() {

  return (
    <BrowserRouter>
    {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="instructions" element={<Instructions />} />
          <Route path="exercises" element={<Exercises />} />
          {/* <Route path="exercises/squat" element={<ExerciseDetails />} /> */}
          <Route path="camera/squat" element={<CameraPage />} />
          <Route path="camera/plank" element={<CameraPagePlank />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App