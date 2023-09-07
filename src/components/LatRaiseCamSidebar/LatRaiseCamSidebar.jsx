import './LatRaiseCamSidebar.scss'

import latRaise from "../../assets/images/LateralRaise.png"

export const LatRaiseCamSidebar = () => {
    return (
      <section className = "plank-cam-sidebar">
        <h1 className = "plank-cam-sidebar__title">Lateral Raise Top Hold</h1>

        
        <div className = "plank-cam-sidebar__img-n-cues">
        <div className = "plank-cam-sidepar__images">
        <img
            className="plank-cam-sidebar__img"
            src = {latRaise}
            alt = "Cartoon of high plank"
        />
        </div>
        <section className = "plank-cam-sidebar__cue-container">
            <p className ="plank-cam-sidebar__cue-title">Checklist:</p>
            <p className ="plank-cam-sidebar__cue">✔️ Your posture should be tall with neutral head and neck position.</p>
            <p className ="plank-cam-sidebar__cue">✔️ Your shoulders should be slightly ahead of your hips.</p>
            <p className ="plank-cam-sidebar__cue">✔️ Aim for your wrists to be in line with your shoulders.</p>
            <p className ="plank-cam-sidebar__cue">✔️ Your arms should be long with a slight bend in your elbows.</p>
            <p className ="plank-cam-sidebar__cue">✔️ Hold the set of dumbbells by your sides with your palms facing your legs.</p>
        </section>
        </div>

      </section>
    )
  }