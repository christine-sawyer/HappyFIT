import { useRef, useState } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "./utilities";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [dorsiflexion, setDorsiflexion] = useState(0);

  const runPosenet = async () =>{
    const net = await posenet.load({
      inputResolution:{width:640, height:480},
      scale:0.5
    })
    // Run detection every 100 miliseconds
    setInterval(()=>{
      detect(net)
    }, 100)
  };

  const detect = async (net) =>{
    // Get Video Properties
    if(typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState===4){
      const video = webcamRef.current.video
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set Video Width - for whatever reason need to force width when working with video component
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Make Detections - pass video to posenet
      const pose = await net.estimateSinglePose(video);
      // console.log(pose);
      // console.log(pose.keypoints[0].position); // x, y of nose

      const leftShoulder= pose.keypoints[5];
      const leftHip = pose.keypoints[11];
      const leftKnee = pose.keypoints[13];
      const leftAnkle = pose.keypoints[14];
      const leftShin = { x: leftKnee.position.x, y: leftAnkle.position.y };
      const leftSideTorso = { x: leftShoulder.position.x, y: leftHip.position.y };

      const leftKneeFlexion =
      (Math.atan2(leftAnkle.position.y - leftKnee.position.y, leftAnkle.position.x - leftKnee.position.x) -
        Math.atan2(leftHip.position.y - leftKnee.position.y, leftHip.position.x - leftKnee.position.x)) *
      (180 / Math.PI);
    const leftHipFlexion =
      360 -
      (Math.atan2(leftKnee.position.y - leftHip.position.y, leftKnee.position.x - leftHip.position.x) -
        Math.atan2(leftShoulder.position.y - leftHip.position.y, leftShoulder.position.x - leftHip.position.x)) *
      (180 / Math.PI);
    const dorsiflexionValue =
      360 -
      (Math.atan2(leftShin.y - leftAnkle.position.y, leftShin.x - leftAnkle.position.x) -
        Math.atan2(leftKnee.position.y - leftAnkle.position.y, leftKnee.position.x - leftAnkle.position.x)) *
      (180 / Math.PI);

      setDorsiflexion(dorsiflexionValue); 

    // const trunkLean =
    //   360 -
    //   (Math.atan2(sHip.y - hip.position.y, sHip.x - hip.position.x) -
    //     Math.atan2(shoulder.position.y - hip.position.y, shoulder.position.x - hip.position.x)) *
    //   (180 / Math.PI);
  

      // const nose = pose.keypoints.find(point => point.part === 'nose');
      // const leftEye = pose.keypoints.find(point => point.part === 'leftEye');
      // const rightEye = pose.keypoints.find(point => point.part === 'rightEye');
      // const leftEar = pose.keypoints.find(point => point.part === 'leftEar');
      // const rightEar = pose.keypoints.find(point => point.part === 'rightEar');
      // const leftShoulder = pose.keypoints.find(point => point.part === 'leftShoulder');
      // const rightShoulder = pose.keypoints.find(point => point.part === 'rightShoulder');
      // const leftElbow = pose.keypoints.find(point => point.part === 'leftElbow');
      // const rightElbow = pose.keypoints.find(point => point.part === 'rightElbow');
      // const leftWrist = pose.keypoints.find(point => point.part === 'leftWrist');
      // const rightWrist = pose.keypoints.find(point => point.part === 'rightWrist');
      // const leftHip = pose.keypoints.find(point => point.part === 'leftHip');
      // const rightHip = pose.keypoints.find(point => point.part === 'rightHip');
      // const leftKnee = pose.keypoints.find(point => point.part === 'leftKnee');
      // const rightKnee = pose.keypoints.find(point => point.part === 'rightKnee');
      // const leftAnkle = pose.keypoints.find(point => point.part === 'leftAnkle');
      // const rightAnkle = pose.keypoints.find(point => point.part === 'rightAnkle');

      console.log('left hip:',leftHip);
      console.log('left hip:',leftShoulder);
      console.log('left shin:', leftShin);

      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
    }
  };

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.5, ctx);
    drawSkeleton(pose["keypoints"], 0.5, ctx);
  };

  runPosenet();

  return (
    <div className="App">
      <h1>Dorsiflexion</h1>
      <h2>{dorsiflexion}</h2>
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height:480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height:480,
          }}
        />
      </header>
    </div>
  )
}

export default App
