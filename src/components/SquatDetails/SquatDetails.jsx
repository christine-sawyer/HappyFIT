import './SquatDetails.scss'

import squat from "../../assets/images/squat.png"

export const SquatDetails = () => {
    return (
      <section className = "squat-details">
        <h1 className = "squat-details__title">Squat</h1>
        
            <p> This is how to squat</p>
            <img
                className="exercise-library__thumbnail-img"
                src = {squat}
                alt = "squat"
              />
      

      </section>
    )
  }