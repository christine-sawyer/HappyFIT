import './ExerciseDetails.scss';
import { ExerciseDescriptions } from '../../components/ExerciseDescriptions/ExerciseDescriptions';
import { ExerciseDescriptionsPlank } from '../../components/ExerciseDescriptionsPlank/ExerciseDescriptionsPlank';

export const ExerciseDetails = () => {
  
  return (
    <section className = "exercise-details">       
        <ExerciseDescriptions />
        <ExerciseDescriptionsPlank />
        {/* <ExerciseVideo /> */}
    </section>
  )
}