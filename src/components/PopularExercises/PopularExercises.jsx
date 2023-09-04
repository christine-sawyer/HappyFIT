import './PopularExercises.scss';
import squat from '../../assets/images/squatleft.png'


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
        </div>
        
        

      </section>
    )
  }