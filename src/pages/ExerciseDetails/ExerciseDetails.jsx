import './ExerciseDetails.scss';
import { ExerciseDescriptions } from '../../components/ExerciseDescriptions/ExerciseDescriptions';

export const ExerciseDetails = () => {
  
  return (
    <section className = "exercise-details">       
        <ExerciseDescriptions />
        {/* <ExerciseVideo /> */}
    </section>
  )
}