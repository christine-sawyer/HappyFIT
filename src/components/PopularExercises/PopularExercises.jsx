import "./PopularExercises.scss";

import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

import squat from "../../assets/images/squatleft.png";
import highPlank from "../../assets/images/HighPlank.png";
import forearmPlank from "../../assets/images/forearmPlank.png";
import lateralRaise from "../../assets/images/lateralRaise.png";

export const PopularExercises = () => {
  return (
    <section className="popular-exercises">
      <h2 className="popular-exercises__title">Popular Exercises</h2>
      <div className="popular-exercises__card-container">
        {/* <Link to ="/exercises/squat" style={{textDecoration: 'none'}}> */}
        <AnchorLink href="#squat" style={{ textDecoration: "none" }}>
          <div className="popular-exercises__card">
            <p className="popular-exercises__card-text-title">Squat</p>
            <img
              className="popular-exercises__img--squat"
              src={squat}
              alt="Cartoon of woman doing a squat"
            />
            <div className="popular-exercises__muscle-group-container">
              <p className="popular-exercises__muscle-group popular-exercises__muscle-group--abs">
                Abs
              </p>
              <p className="popular-exercises__muscle-group popular-exercises__muscle-group--butt-hips">
                Butt/Hips
              </p>
              <p className="popular-exercises__muscle-group popular-exercises__muscle-group--calves-shins">
                Legs - Calves & Shins
              </p>
              <p className="popular-exercises__muscle-group popular-exercises__muscle-group--thighs">
                Legs - Thighs
              </p>
            </div>
          </div>
        </AnchorLink>
        {/* </Link>  */}

        {/* <Link to ="/exercises/plank" style={{textDecoration: 'none'}}> */}
        <AnchorLink href="#plank" style={{ textDecoration: "none" }}>
          <div className="popular-exercises__card">
            <p className="popular-exercises__card-text-title">Plank</p>
            <img
              className="popular-exercises__img--forearm-plank"
              src={forearmPlank}
              alt="Cartoon of woman doing a forearm plank"
            />
            <img
              className="popular-exercises__img--high-plank"
              src={highPlank}
              alt="Cartoon of man doing a high plank"
            />
            <div className="popular-exercises__muscle-group-container">
              <p className="popular-exercises__muscle-group popular-exercises__muscle-group--abs">
                Abs
              </p>
              <p className="popular-exercises__muscle-group popular-exercises__muscle-group--back">
                Back
              </p>
            </div>
          </div>
          {/* </Link> */}
        </AnchorLink>

        <Link to="/exercises/lateral-raise" style={{ textDecoration: "none" }}>
          <div className="popular-exercises__card">
            <p className="popular-exercises__card-text-title">Lateral Raise</p>
            <img
              className="popular-exercises__img--lateral-raise"
              src={lateralRaise}
              alt="Cartoon of man doing a lateral raise"
            />
            <div className="popular-exercises__muscle-group-container">
              <p className="popular-exercises__muscle-group popular-exercises__muscle-group--shoulders">
                Shoulders
              </p>
            </div>
          </div>
        </Link>
      </div>
      <Link to="/" className="popular-exercises__link">
        🏠Home
      </Link>
    </section>
  );
};
