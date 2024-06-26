import "./Instructions.scss";

import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import logo from "../../assets/logos/HappyFITLogo.png";
import penguin from "../../assets/gifs/PenguinCurls.gif";
import cameraPopup from "../../assets/images/UseCameraPopup.jpg";
import manOutOfFrame from "../../assets/images/ManNotInFrame.png";
import squatInFrame from "../../assets/images/SquatInFrame.png";

export const Instructions = () => {
  const {exercise} = useParams();

  return (
    <main className="instructions">
      <div className="instructions__top-bar">
        <Link to="/" className="instructions__logo-link">
          <img
            className="instructions__logo"
            src={logo}
            alt="HappyFIT logo"
          />
        </Link>
        <h1 className="instructions__title">
          How to train with HappyFIT Coach Cam?
        </h1>{" "}
        <img
          className="instructions__penguin"
          src={penguin}
          alt="HappyFIT penguin mascot git doing curls"
        />
      </div>

      <p className="instructions__details">
        Welcome to Coach Cam, your personal virtual coach for perfecting your
        workouts! With Coach Cam, you have a real-time fitness companion right
        at your fingertips. Whether you're a fitness novice or a seasoned pro,
        Coach Cam is here to ensure you perform your best and reach your fitness
        goals safely. Let's get started!{" "}
      </p>
      <section className="instructions__container">
        <div className="instructions__card-container">
          <div className="instructions__card">
            <p className="instructions__card-text">
              Accept camera access and wait for the webcam to load.
            </p>
            <img
              className="instructions__img--camera-popup"
              src={cameraPopup}
              alt="Accept camera popup"
            />
          </div>

          <div className="instructions__card">
            <p className="instructions__card-text">
              Make sure your full body is in frame.
            </p>
            <img
              className="instructions__img--man-out"
              src={manOutOfFrame}
              alt="Cartoon of a man jumping out of frame"
            />
          </div>
          <div className="instructions__card">
            <p className="instructions__card-text">
              Perform same pose as next to camera. Mirror image.
            </p>
            <img
              className="instructions__img--squat"
              src={squatInFrame}
              alt="Cartoon of lady doing a squat in frame"
            />
          </div>
        </div>
        <div className="instructions__links-container">
          <Link to="/exercises" className="instructions__link">
            ⬅️Back
          </Link>
          <Link
            to={`/camera/${exercise}`}
            className="instructions__link instructions__link--cam"
          >
            🎥 Go See Coach Cam! 🎥
          </Link>
        </div>
      </section>
    </main>
  );
};
