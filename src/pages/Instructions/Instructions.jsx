import './Instructions.scss';

import cameraPopup from "../../assets/images/UseCameraPopup.jpg";
import manOutOfFrame from "../../assets/images/ManNotInFrame.png"
import squatInFrame from "../../assets/images/SquatInFrame.png"

export const Instructions = () => {
  
  return (
    <main className = "instructions">
        <section className = "instructions__container">
          <h1 className = "instructions__title">How to train with HappyFIT Coach Cam!</h1>
          <div className = "instructions__card">
            <p className = "instructions__card-text">Accept camera access and wait for the webcam to load.</p>
            <img 
            className = "instructions__img--camera-popup"
            src = {cameraPopup}
            alt = "Accept camera popup"
          />
          </div>
          
          <div className = "instructions__card">
            <p className = "instructions__card-text">Make sure your full body is in frame.</p>
            <img 
              className = "instructions__img--man-out"
              src = {manOutOfFrame}
              alt = "Cartoon of a man jumping out of frame"
            />
          </div>
          <div className = "instructions__card">
            <p className = "instructions__card-text">Perform same pose next to camera. Mirror the image.</p>
            <img 
            className = "instructions__img--squat"
            src = {squatInFrame}
            alt = "Cartoon of lady doing a squat in frame"
          />
          </div>

          
          <p>M</p>
        </section>

        
    </main>
  )
}