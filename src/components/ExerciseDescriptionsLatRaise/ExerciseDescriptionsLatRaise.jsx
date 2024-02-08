import "./ExerciseDescriptionsLatRaise.scss";

import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

import LatRaiseGIF from "../../assets/gifs/LateralRaise.gif";
import latRaise from "../../assets/images/LateralRaise.png";

export const ExerciseDescriptionsLatRaise = () => {
  return (
    <section className="exercise-descriptions">
      <div className="exercise-descriptions__title-n-card">
        <h1 className="exercise-descriptions__title">Lateral Raise</h1>
        <div className="exercise-descriptions__card">
          <img
            className="exercise-descriptions__img--lat-raise"
            src={latRaise}
            alt="Cartoon of man doing a forearm Lateral Raise"
          />
          <div className="exercise-descriptions__muscle-group-container">
            <p className="exercise-descriptions__muscle-group popular-exercises__muscle-group--shoulders">
              Shoulders
            </p>
          </div>
        </div>
      </div>

      <div className="exercise-descriptions__coach-cam-links">
        <Link
          to="/camera/lateral-raise"
          className="exercise-descriptions__link exercise-descriptions__cam-link"
        >
          🎥 Coach Cam 🎥
        </Link>
        <Link to="/instructions/lateral-raise" className="exercise-descriptions__link">
          Instructions
        </Link>
      </div>
      <div className="exercise-descriptions__gif-n-text">
        <img
          className="exercise-descriptions__lat-raise-gif"
          src={LatRaiseGIF}
          alt="Gif of man doing lateral raises"
        />

        <div className="exercise-descriptions__steps-container">
          <p className="exercise-descriptions__step-number">Step 1</p>
          <p className="exercise-descriptions__step-details">
            Starting Position: Stand holding dumbbells in your hands with a
            closed, neutral grip (thumbs around the handles and palms facing
            your body). Position the dumbbells alongside your thighs with your
            elbows extended or holding a slight bend. Assume either a
            split-stance position to stabilize your body or position your feet
            slightly wider than hip-width apart.
          </p>
          <p className="exercise-descriptions__step-number"> Step 2</p>
          <p className="exercise-descriptions__step-details">
            Stiffen your torso by contracting your abdominal and core muscles
            ("bracing"), and depress and retract your scapulae (pull your
            shoulders down and back), maintaining this position throughout the
            exercise. Your head position should be aligned with your spine.
          </p>
          <p className="exercise-descriptions__step-number"> Step 3</p>
          <p className="exercise-descriptions__step-details">
            Upward Phase: Exhale and slowly raise the dumbbells up and out to
            your sides. Your elbows and upper arms should rise together and be
            slightly ahead of your forearms and dumbbells. As your arms move
            past 60 - 70 degrees (nearing shoulder level), rotate them slightly
            upwards so that the front edge of the dumbbells point slightly
            upwards. Continue raising the dumbbells until your arms are level
            with your shoulders and approximately parallel with the floor.
            Maintain your torso erect (no arching your low back) and neutral
            wrist position (avoid flexion and extension of your wrists).
          </p>
          <p className="exercise-descriptions__step-number"> Step 4</p>
          <p className="exercise-descriptions__step-details">
            As this exercise traditionally positions the arms into internal
            rotation during the lift, the slight external rotation initiated at
            the 60-70 degree mark may reduce potential impingement in the
            shoulder joint.{" "}
          </p>
        </div>
      </div>
      <div className="exercise-descriptions__links-container">
        <AnchorLink
          href="#top"
          className="exercise-descriptions__link"
          style={{ textDecoration: "none" }}
        >
          {/* <Link to="/exercises" className="exercise-descriptions__link"> */}
          🏋🏽‍♀️Exercise Library
          {/* </Link> */}
        </AnchorLink>
        <Link to="/" className="exercise-descriptions__link">
          Home🏠
        </Link>
      </div>
    </section>
  );
};
