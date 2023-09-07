import { LatRaiseCam } from '../../components/LatRaiseCam/LatRaiseCam';
import { LatRaiseCamSidebar } from '../../components/LatRaiseCamSidebar/LatRaiseCamSidebar';
import { PlankCam } from '../../components/PlankCam/PlankCam';
import { PlankCamSidebar } from '../../components/PlankCamSidebar/PlankCamSidebar';
import { SquatCam } from '../../components/SquatCam/SquatCam';
import { SquatCamSidebar } from '../../components/SquatCamSidebar/SquatCamSidebar';
import './CameraPageLatRaise.scss';

export const CameraPageLatRaise = () => {
  
  return (
    <main className = "camera-page">
        {/* <h1>HappyFIT Cam</h1> */}
        <section className = "camera-page__squat-cam-container">
            <LatRaiseCam />
            <LatRaiseCamSidebar />
            {/* <PlankCam />
            <PlankCamSidebar /> */}
            
        </section>
        
    </main>
  )
}