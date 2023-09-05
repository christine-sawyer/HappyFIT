import "./ExerciseDescriptions.scss";

import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import squat from "../../assets/images/squatleft.png";
import squatGIF from "../../assets/gifs/squat.gif";

export const ExerciseDescriptions = () => {
  return (
    <section className="exercise-descriptions">
        <div className = "exercise-descriptions__title-n-card">
      <h1 className="exercise-descriptions__title">Bodyweight Squat</h1>
      <div className = "exercise-descriptions__card">
      <img
        className="exercise-descriptions__img--squat"
        src={squat}
        alt="Cartoon of woman doing a squat"
      />
      <div className="exercise-descriptions__muscle-group-container">
        <p className="exercise-descriptions__muscle-group exercise-descriptions__muscle-group--abs">
          Abs
        </p>
        <p className="exercise-descriptions__muscle-group exercise-descriptions__muscle-group--butt-hips">
          Butt/Hips
        </p>
        <p className="exercise-descriptions__muscle-group exercise-descriptions__muscle-group--calves-shins">
          Legs - Calves & Shins
        </p>
        <p className="exercise-descriptions__muscle-group exercise-descriptions__muscle-group--thighs">
          Legs - Thighs
        </p>
      </div>
      </div>
      </div>

    <div className = "exercise-descriptions__coach-cam-links">
      <Link to ="/camera" className = "exercise-descriptions__link exercise-descriptions__cam-link">
      🎥 Coach Cam 🎥
        </Link>
        <Link to ="/instructions" className = "exercise-descriptions__link">
          Instructions
        </Link>
        </div>
      <div className="exercise-descriptions__gif-n-text">
        <img
          className="exercise-descriptions__squat-gif"
          src={squatGIF}
          alt="Gif of woman doing a squat"
        />

        <div className="exercise-descriptions__steps-container">
          <p className="exercise-descriptions__step-number">Step 1</p>
          <p className="exercise-descriptions__step-details">
            Starting Position: Begin standing with your feet slightly wider than
            hip-width, with the toes turned slightly outwards with your hands by
            your sides so the palms facing inwards. Depress and retract your
            scapulae (pull the shoulders down and back).
          </p>
          <p className="exercise-descriptions__step-number"> Step 2</p>
          <p className="exercise-descriptions__step-details">
            Stiffen your core and abdominal muscles (“bracing”) to stabilize
            your spine. Hold your chest up and out, tilt your head slightly up,
            shift your weight back into your heels while pushing your hips
            towards the wall behind you.
          </p>
          <p className="exercise-descriptions__step-number"> Step 3</p>
          <p className="exercise-descriptions__step-details">
            Downward Phase: Start the downward phase by first shifting your hips
            backwards then downwards to create a hinge-like movement at your
            hips and knees simultaneously. As you lower your hips the knees will
            then start to shift forward slowly, but try to control the amount of
            forward translation (movement) of the tibia (shinbone). Maintain
            tension in the core muscles (continue bracing) and attempt to keep
            your back flat.
          </p>
          <p className="exercise-descriptions__step-number"> Step 4</p>
          <p className="exercise-descriptions__step-details">
            Continue to lower yourself until your thighs are parallel or almost
            parallel with the floor, until your heels begin to lift off the
            floor, or until your torso begins to round or flex forward. Monitor
            your feet, ankles and knees, ensuring that the feet don't move, the
            ankles do not collapse in or out and the knees remain aligned over
            the second toe.
          </p>
          <p className="exercise-descriptions__step-number"> Step 5</p>
          <p className="exercise-descriptions__step-details">
            From the Lowered Position: the knees should continue to remain
            aligned over the second toe and body weight should be evenly
            distributed between the balls and heels of the feet. From the side,
            the position of the tibia (shinbone) and torso should be parallel
            with each other and the low back should appear flat or showing the
            beginning of some rounding.
          </p>
          <p className="exercise-descriptions__step-number"> Step 6</p>
          <p className="exercise-descriptions__step-details">
            Upward Phase: While maintaining your back, chest and head-up
            position, exhale and extend the hips and knees by pushing your feet
            into the floor through your heels. The hips and torso need to rise
            together while keeping the heels flat on the floor and knees aligned
            over the second toe. Continue extending until you reach your
            starting position.
          </p>
        </div>
      </div>
      <div className = "exercise-descriptions__links-container">
            <Link to ="/" className = "exercise-descriptions__link">
            🏠Home
            </Link>
            <AnchorLink href='#top' className = "exercise-descriptions__link" style={{textDecoration: 'none'}}>
            {/* <Link to ="/exercises" className = "exercise-descriptions__link"> */}
                Exercise Library🏋🏽‍♀️
            {/* </Link> */}
            </AnchorLink>
          </div>
    </section>
  );
};
