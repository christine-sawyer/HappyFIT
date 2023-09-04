import './ExerciseDetails.scss';
import { ExerciseDescriptions } from '../../components/ExerciseDescriptions/ExerciseDescriptions';

export const ExerciseDetails = () => {
  
  return (
    <section className = "exercise-details">
        <h1>Exercise Details</h1>
        
        <ExerciseDescriptions />
        {/* <ExerciseVideo /> */}
    </section>
  )
}