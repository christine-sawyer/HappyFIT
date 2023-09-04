import { ExerciseLibraryCard } from "../ExerciseLibraryCard/ExerciseLibraryCard"
import { PopularExercises } from "../PopularExercises/PopularExercises"

export const ExerciseLibrary = () => {
    return (
      <section className = "exercise-library">
        <h1 className = "exercise-library__title">Exercise Library</h1>
        {/* <ExerciseLibraryCard /> */}
        <PopularExercises />

      </section>
    )
  }