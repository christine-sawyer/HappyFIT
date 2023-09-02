import { ExerciseLibrary } from '../../components/ExerciseLibrary/ExerciseLibrary';
import { SquatDetails } from '../../components/SquatDetails/SquatDetails';
import './Exercises.scss';

export const Exercises = () => {
  
  return (
    <main className = "exercises">
        <h1>Exercise</h1>
        {/* <ExerciseLibrary /> */}
        <SquatDetails /> 
    </main>
  )
}