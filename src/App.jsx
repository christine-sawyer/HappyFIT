import { useRef, useState, useEffect } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "./utilities";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [dorsiflexion, setDorsiflexion] = useState(0);
  const [leftKneeFlexion, setLeftKneeFlexion] = useState(0);

  const runPosenet = async () =>{
    console.log("runPosenet")
    const net = await posenet.load({
      // inputResolution:{width:640, height:480}, // removing this seemed to improve performance...
      scale: 0.5 //Smaller number faster speed but less accurate
    })
    // Run detection every 100 miliseconds
    setInterval(()=>{
      detect(net);
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

      const nose = pose.keypoints[0];
      const leftEye = pose.keypoints[1];
      const rightEye = pose.keypoints[2];
      const leftEar = pose.keypoints[3];
      const rightEar = pose.keypoints[4];
      const leftShoulder= pose.keypoints[5];
      const rightShoulder = pose.keypoints[6];
      const leftElbow = pose.keypoints[7];
      const rightElbow= pose.keypoints[8];
      const leftWrist = pose.keypoints[9];
      const rightWrist = pose.keypoints[10];
      const leftHip = pose.keypoints[11];
      const rightHip = pose.keypoints[12];
      const leftKnee = pose.keypoints[13];
      const rightKnee = pose.keypoints[14];
      const leftAnkle = pose.keypoints[15];
      const rightAnkle = pose.keypoints[16];

      const leftShin = { x: leftKnee.position.x, y: leftAnkle.position.y };
      const leftSideTorso = { x: leftShoulder.position.x, y: leftHip.position.y };


      const leftKneeFlexionValue =
      (Math.atan2(leftAnkle.position.y - leftKnee.position.y, leftAnkle.position.x - leftKnee.position.x) -
        Math.atan2(leftHip.position.y - leftKnee.position.y, leftHip.position.x - leftKnee.position.x)) *
      (180 / Math.PI);
      setLeftKneeFlexion(leftKneeFlexionValue); 
    // const leftHipFlexion =
    //   360 -
    //   (Math.atan2(leftKnee.position.y - leftHip.position.y, leftKnee.position.x - leftHip.position.x) -
    //     Math.atan2(leftShoulder.position.y - leftHip.position.y, leftShoulder.position.x - leftHip.position.x)) *
    //   (180 / Math.PI);
    // const dorsiflexionValue =
    //   360 -
    //   (Math.atan2(leftShin.y - leftAnkle.position.y, leftShin.x - leftAnkle.position.x) -
    //     Math.atan2(leftKnee.position.y - leftAnkle.position.y, leftKnee.position.x - leftAnkle.position.x)) *
    //   (180 / Math.PI);

    //   setDorsiflexion(dorsiflexionValue); 

    // const trunkLean =
    //   360 -
    //   (Math.atan2(sHip.y - hip.position.y, sHip.x - hip.position.x) -
    //     Math.atan2(shoulder.position.y - hip.position.y, shoulder.position.x - hip.position.x)) *
    //   (180 / Math.PI);
  



      // console.log('left hip:',leftHip);
      // console.log('left hip:',leftShoulder);
      // console.log('left shin:', leftShin);

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


  useEffect(() => {
    runPosenet()
  },[])
  

  return (
    <div className="App">
      <h2>Knee Flexion</h2>
      <h2>{leftKneeFlexion.toFixed(1)}°</h2>
      {/* <h2>Dorsiflexion</h2>
      <h2>{dorsiflexion}</h2> */}
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
