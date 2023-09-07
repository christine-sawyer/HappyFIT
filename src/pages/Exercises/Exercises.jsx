import "./Exercises.scss";

import AnchorLink from "react-anchor-link-smooth-scroll";

import { ExerciseLibrary } from "../../components/ExerciseLibrary/ExerciseLibrary";
import { ExerciseDescriptions } from "../../components/ExerciseDescriptions/ExerciseDescriptions";
import { ExerciseDescriptionsPlank } from "../../components/ExerciseDescriptionsPlank/ExerciseDescriptionsPlank";
import { ExerciseDescriptionsLatRaise } from "../../components/ExerciseDescriptionsLatRaise/ExerciseDescriptionsLatRaise";

export const Exercises = () => {
  return (
    <main className="exercises">
      <section id="top">
        <ExerciseLibrary />
      </section>
      <section id="squat">
        <ExerciseDescriptions />
      </section>
      <section id="plank">
        <ExerciseDescriptionsPlank />
      </section>
      <section id="lateral-raise">
        <ExerciseDescriptionsLatRaise />
      </section>
    </main>
  );
};
