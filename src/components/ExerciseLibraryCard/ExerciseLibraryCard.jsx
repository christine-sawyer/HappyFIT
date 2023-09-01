import './ExerciseLibraryCard.scss'

import squat from "../../assets/images/squat.png"

export const ExerciseLibraryCard = () => {
    return (
      <section className = "exercise-library">
        <h1 className = "exercise-library__title">Exercise Library</h1>
        <div className = "exercise-library__card">
            <h4 className = "exercise-library__ex-name">Squat</h4>
            <img
                className="exercise-library__thumbnail-img"
                src = {squat}
                alt = "squat"
              />
        </div>

      </section>
    )
  }