import { PlankCam } from '../../components/PlankCam/PlankCam';
import { PlankCamSidebar } from '../../components/PlankCamSidebar/PlankCamSidebar';
import { SquatCam } from '../../components/SquatCam/SquatCam';
import { SquatCamSidebar } from '../../components/SquatCamSidebar/SquatCamSidebar';
import './CameraPage.scss';

export const CameraPage = () => {
  
  return (
    <main className = "camera-page">
        {/* <h1>HappyFIT Cam</h1> */}
        <section className = "camera-page__squat-cam-container">
            <SquatCam />
            <SquatCamSidebar />
            {/* <PlankCam />
            <PlankCamSidebar /> */}
            
        </section>
        
    </main>
  )
}