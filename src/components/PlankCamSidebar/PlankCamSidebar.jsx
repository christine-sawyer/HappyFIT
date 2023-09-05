import './PlankCamSidebar.scss'

import forearmPlank from "../../assets/images/ForearmPlank.png"
import highPlank from "../../assets/images/HighPlank.png"

export const PlankCamSidebar = () => {
    return (
      <section className = "plank-cam-sidebar">
        <h1 className = "plank-cam-sidebar__title">Static Plank</h1>

        
        <div className = "plank-cam-sidebar__img-n-cues">
        <div className = "plank-cam-sidepar__images">
        <img
            className="plank-cam-sidebar__img"
            src = {forearmPlank}
            alt = "Cartoon of forearm plank"
        />
        <img
            className="plank-cam-sidebar__img"
            src = {highPlank}
            alt = "Cartoon of high plank"
        />
        </div>
        <section className = "plank-cam-sidebar__cue-container">
            <p className ="plank-cam-sidebar__cue-title">Checklist:</p>
            <p className ="plank-cam-sidebar__cue">✔️ Make sure to maintain a neutral spine and neck.</p>
            <p className ="plank-cam-sidebar__cue">✔️ Flex every muscle in your body; with extra emphasis on your abs, lower back and glutes.</p>
            <p className ="plank-cam-sidebar__cue">✔️ Don’t sink down into your shoulders.</p>
            <p className ="plank-cam-sidebar__cue">✔️ Keep shoulders over elbows.</p>
            <p className ="plank-cam-sidebar__cue">✔️ Breathe slow and steady; don’t hold your breath.</p>
        </section>
        </div>

      </section>
    )
  }