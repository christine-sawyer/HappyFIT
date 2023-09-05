import "./ExerciseDescriptionsPlank.scss";

import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import squat from "../../assets/images/squatleft.png";
import plankGIF from "../../assets/gifs/ToHighPlank.gif";
import highPlank from '../../assets/images/HighPlank.png'
import forearmPlank from '../../assets/images/forearmPlank.png'

export const ExerciseDescriptionsPlank = () => {
  return (
    <section className="exercise-descriptions">
      <div className="exercise-descriptions__title-n-card">
        <h1 className="exercise-descriptions__title">Plank</h1>
        <div  className = "exercise-descriptions__card">
              <img 
                className = "exercise-descriptions__img--forearm-plank"
                src = {forearmPlank}
                alt = "Cartoon of woman doing a forearm plank"
              />
              <img 
                className = "exercise-descriptions__img--high-plank"
                src = {highPlank}
                alt = "Cartoon of man doing a high plank"
              />
              <div className = "exercise-descriptions__muscle-group-container">
                <p className = "exercise-descriptions__muscle-group popular-exercises__muscle-group--abs">
                    Abs
                </p>
                <p className = "exercise-descriptions__muscle-group popular-exercises__muscle-group--back">
                    Back
                </p>
              </div>
              </div>
      </div>

      <div className="exercise-descriptions__coach-cam-links">
        <Link
          to="/camera/plank"
          className="exercise-descriptions__link exercise-descriptions__cam-link"
        >
          🎥 Coach Cam 🎥
        </Link>
        <Link to="/instructions" className="exercise-descriptions__link">
          Instructions
        </Link>
      </div>
      <div className="exercise-descriptions__gif-n-text">
        <img
          className="exercise-descriptions__plank-gif"
          src={plankGIF}
          alt="Gif of woman going from forearm plank to high plank"
        />

        <div className="exercise-descriptions__steps-container">
          <p className="exercise-descriptions__step-number">Step 1</p>
          <p className="exercise-descriptions__step-details">
            Starting Position: Lie prone (on your stomach) on an exercise mat or
            floor with your elbows close to your sides and directly under your
            shoulders, palms down and hands facing forward. Contract your
            quadriceps to extend your legs and dorsiflex your ankles (pull toes
            towards your shins). Contract your core and abdominal muscles to
            stiffen your torso.
          </p>
          <p className="exercise-descriptions__step-number"> Step 2</p>
          <p className="exercise-descriptions__step-details">
            Upward Phase. Slowly lift your entire torso off the floor or mat,
            maintaining a stiff torso and legs. Avoid any arching (sagging) in
            your low back, hiking (upwards) in your hips or bending in the
            knees. Avoid shrugging your shoulder and keep your shoulders
            positioned directly over your elbows with your palms facing down.
            Continue to breath while holding this position for a specified time
            (5+ seconds).
          </p>
          <p className="exercise-descriptions__step-number"> Step 3</p>
          <p className="exercise-descriptions__step-details">
            Downward Phase: While maintaining a stiff torso and extended knees,
            gently lower your body back towards the mat or floor before
            relaxing. If you experience any pain in the low back with this
            movement, stop the exercise immediately and consult with your
            doctor.
          </p>
        </div>
      </div>
      <div className="exercise-descriptions__links-container">
        <Link to="/" className="exercise-descriptions__link">
          🏠Home
        </Link>
        <AnchorLink href='#top' className = "exercise-descriptions__link" style={{textDecoration: 'none'}}>
        {/* <Link to="/exercises" className="exercise-descriptions__link"> */}
          Exercise Library🏋🏽‍♀️
        {/* </Link> */}
        </AnchorLink>
      </div>
    </section>
  );
};
