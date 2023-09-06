import './SquatCamSidebar.scss'

import squat from "../../assets/images/squatleft.png"

export const SquatCamSidebar = () => {
    return (
      <section className = "squat-cam-sidebar">
        <h1 className = "squat-cam-sidebar__title">Static Squat</h1>

        <div className = "squat-cam-sidebar__img-n-cues">
        <img
            className="squat-cam-sidebar__img"
            src = {squat}
            alt = "squat"
        />
        {/* Add check marks next to items */}
        <section className = "squat-cam-sidebar__cue-container">
            <p className ="squat-cam-sidebar__cue-title">Checklist:</p>
            <p className ="squat-cam-sidebar__cue">✔️ Feet shoulder-width apart.</p>
            <p className ="squat-cam-sidebar__cue">✔️ Toes turned slightly outwards.</p>
            <p className ="squat-cam-sidebar__cue">✔️ Weight in midfoot (avoid raising the toes or the heels).</p>
            <p className ="squat-cam-sidebar__cue">✔️ Neutral spine throughout the squat (avoid arching or rounding back).</p>
            <p className ="squat-cam-sidebar__cue">✔️ Keep your shoulders down and back.</p>
            <p className ="squat-cam-sidebar__cue">✔️ Brace (activate) your core and abdominal muscles.</p>
            <p className ="squat-cam-sidebar__cue">✔️ Try to keep thighs parallel to floor.</p>
        </section>
        </div>

      </section>
    )
  }