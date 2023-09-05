import { PlankCam } from '../../components/PlankCam/PlankCam';
import { PlankCamSidebar } from '../../components/PlankCamSidebar/PlankCamSidebar';

import './CameraPagePlank.scss';

export const CameraPagePlank = () => {
  
  return (
    <main className = "camera-page">
        <section className = "camera-page__squat-cam-container">
            <PlankCam />
            <PlankCamSidebar />
        </section>
        
    </main>
  )
}