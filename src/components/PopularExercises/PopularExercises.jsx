import './PopularExercises.scss';

import { Link } from 'react-router-dom';

import squat from '../../assets/images/squatleft.png'
import highPlank from '../../assets/images/HighPlank.png'
import forearmPlank from '../../assets/images/forearmPlank.png'
import lateralRaise from '../../assets/images/lateralRaise.png'


export const PopularExercises = () => {
    return (
      <section className = "popular-exercises">
        <h1 className = "popular-exercises__title">Popular Exercises</h1>
        <div className = "popular-exercises__card-container">
            <div className = "popular-exercises__card">
              <p className = "popular-exercises__card-text-title">
                Squat
              </p>
              <img 
                className = "popular-exercises__img--squat"
                src = {squat}
                alt = "Cartoon of woman doing a squat"
              />
              <div className = "popular-exercises__muscle-group-container">
                <p className = "popular-exercises__muscle-group popular-exercises__muscle-group--abs">
                    Abs
                </p>
                <p className = "popular-exercises__muscle-group popular-exercises__muscle-group--butt-hips">
                    Butt/Hips
                </p>
                <p className = "popular-exercises__muscle-group popular-exercises__muscle-group--calves-shins">
                    Legs - Calves & Shins
                </p>
                <p className = "popular-exercises__muscle-group popular-exercises__muscle-group--thighs">
                    Legs - Thighs
                </p>
              </div>
            </div>

            <div className = "popular-exercises__card">
              <p className = "popular-exercises__card-text-title">
                Plank
              </p>
              <img 
                className = "popular-exercises__img--forearm-plank"
                src = {forearmPlank}
                alt = "Cartoon of woman doing a forearm plank"
              />
              <img 
                className = "popular-exercises__img--high-plank"
                src = {highPlank}
                alt = "Cartoon of man doing a high plank"
              />
              <div className = "popular-exercises__muscle-group-container">
                <p className = "popular-exercises__muscle-group popular-exercises__muscle-group--abs">
                    Abs
                </p>
                <p className = "popular-exercises__muscle-group popular-exercises__muscle-group--back">
                    Back
                </p>
              </div>
            </div>

            <div className = "popular-exercises__card">
              <p className = "popular-exercises__card-text-title">
                Lateral Raise
              </p>
              <img 
                className = "popular-exercises__img--lateral-raise"
                src = {lateralRaise}
                alt = "Cartoon of man doing a lateral raise"
              />
              <div className = "popular-exercises__muscle-group-container">
                <p className = "popular-exercises__muscle-group popular-exercises__muscle-group--shoulders">
                    Shoulders
                </p>
              </div>
            </div>         
        </div>
        <Link to ="/" className = "popular-exercises__link">
            ⬅️Back
            </Link>
        

      </section>
    )
  }