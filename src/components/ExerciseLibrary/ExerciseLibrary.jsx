import './ExerciseLibrary.scss';

import { Link } from 'react-router-dom';
import { ExerciseLibraryCard } from "../ExerciseLibraryCard/ExerciseLibraryCard";
import { PopularExercises } from "../PopularExercises/PopularExercises";

import logo from "../../assets/logos/HappyFITLogo.png";
import penguin from "../../assets/gifs/PenguinCurls.gif";

export const ExerciseLibrary = () => {
    return (
      <section className = "exercise-library">
        <div className="exercise-library__top-bar">
        <Link to ="/" className = "exercise-library__logo-link">
        <img className="exercise-library__logo" src={logo} alt="HappyFIT logo" />
        </Link>
        <h1 className = "exercise-library__title">Exercise Library</h1>
        <img
          className="exercise-library__penguin"
          src={penguin}
          alt="HappyFIT penguin mascot git doing curls"
        />
      </div>
        {/* <ExerciseLibraryCard /> */}
        <PopularExercises />

      </section>
    )
  }