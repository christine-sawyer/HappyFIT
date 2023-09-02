import './SquatDetails.scss'

import squat from "../../assets/images/squat.png"

export const SquatDetails = () => {
    return (
      <section className = "squat-details">
        <h1 className = "squat-details__title">Bodyweight Squat</h1>
            <h3>Body Part(s): </h3>
            <h3>Equipment: </h3>
            <h3>Difficulty: </h3>

        
            <p className ="squat-details__step"> Step 1</p>
            <p className ="squat-details__step"> Step 2</p>
            <p className ="squat-details__step"> Step 3</p>
            <p className ="squat-details__step"> Step 4</p>
            <p className ="squat-details__step"> Step 5</p>
            <p className ="squat-details__step"> Step 6</p>
            <img
                className="exercise-library__thumbnail-img"
                src = {squat}
                alt = "squat"
              />
      

      </section>
    )
  }