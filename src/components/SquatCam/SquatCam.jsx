import './SquatCam.scss';
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "../../utilities/utilities";
import { useRef, useState, useEffect } from "react";

export const SquatCam = () => {
    const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [leftShoulderFlexion, setLeftShoulderFlexion] = useState(0);
  const [trunkLean, setTrunkLean] = useState(0);
  const [leftKneeFlexion, setLeftKneeFlexion] = useState(0);
  const [leftHipFlexion, setLeftHipFlexion] = useState(0);
  const [dorsiflexion, setDorsiflexion] = useState(0);
  const [armHeight, setArmHeight] = useState(0);

  const runPosenet = async () =>{
    // console.log("runPosenet")
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

      // Name all keypoints
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

      const leftShoulderToWristX = leftShoulder.position.x - leftWrist.position.x;



/*
* Squat - Left side toward camera
*/
      /*
      * Knee flexion
      * Proper form: angle from 90° to 100°
      * >90° Bring your hips up
      * <100° Lower your hips more
      */

      const leftKneeFlexionValue =
      (Math.atan2(leftAnkle.position.y - leftKnee.position.y, leftAnkle.position.x - leftKnee.position.x) -
        Math.atan2(leftHip.position.y - leftKnee.position.y, leftHip.position.x - leftKnee.position.x)) *
      (180 / Math.PI);
      setLeftKneeFlexion(leftKneeFlexionValue); 

    // const leftShoulderFlexionValue =
    //   360 -
    //   (Math.atan2(leftElbow.position.y - leftShoulder.position.y, leftElbow.position.x - leftShoulder.position.x) -
    //     Math.atan2(leftHip.position.y - leftShoulder.position.y, leftHip.position.x - leftShoulder.position.x)) *
    //   (180 / Math.PI);
    //   setLeftShoulderFlexion(leftShoulderFlexionValue); 

    /*
    * Knee flexion
    * Proper form: angle from 110° to 130°
    * >110° Bring your chest up
    * <130° Bring your chest down towards thighs
    */

    const leftHipFlexionValue =
    360 -
    (Math.atan2(leftKnee.position.y - leftHip.position.y, leftKnee.position.x - leftHip.position.x) -
      Math.atan2(leftShoulder.position.y - leftHip.position.y, leftShoulder.position.x - leftHip.position.x)) *
    (180 / Math.PI);
    setLeftHipFlexion(leftHipFlexionValue); 

    /*
    * Arm height
    * Proper form: Wrists at shoulder level. Takes in account for straight and bent arms.
    * Shoulder y > Wrist y - 10 : Raise your arms up
    * Shoulder y > Wrist y + 10 : Lower your arms down
    */

    // const armHeightValue =
      // (Math.atan2((leftWrist.position.y - leftShoulder.position.y)/ leftShoulderToWristX)) *
      // (180 / Math.PI);
      // Math.atan2(leftWrist.position.y - leftShoulder.position.y, leftWrist.position.x - leftShoulder.position.x) *
      // // (180 / Math.PI);
      // let angleRadians = Math.atan2(leftWrist.position.y - leftShoulder.position.y, leftWrist.position.x - leftShoulder.position.x);
    
      //   angleRadians += Math.PI;

      // let armHeightValue = 360 - angleRadians * (180 / Math.PI);


      // setArmHeight(armHeightValue);

    //   console.log('wrist', leftWrist.position.x);
    //   console.log('shoulder', leftShoulder.position.x);
      // console.log(armHeightValue);
    //   console.log(leftShoulderToWristX);


    // const dorsiflexionValue =
    //   360 -
    //   (Math.atan2(leftShin.y - leftAnkle.position.y, leftShin.x - leftAnkle.position.x) -
    //     Math.atan2(leftKnee.position.y - leftAnkle.position.y, leftKnee.position.x - leftAnkle.position.x)) *
    //   (180 / Math.PI);

    //   setDorsiflexion(dorsiflexionValue); 

    // const trunkLeanValue =
    //   360 -
    //   (Math.atan2(leftSideTorso - leftHip.position.y, leftSideTorso - leftHip.position.x) -
    //     Math.atan2(leftShoulder.position.y - leftHip.position.y, leftShoulder.position.x - leftHip.position.x)) *
    //   (180 / Math.PI);
    //   setTrunkLean(trunkLeanValue); 
  



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
       <div className="squat-cam">

      {/* {leftShoulderFlexion < 90 ? (
        <>
        <h2>Shoulder Flexion: </h2>
        <h3>{leftShoulderFlexion.toFixed(1)}°</h3>
        </>
      ) : (
        <>
          <h2>Shoulder Flexion: Safe Range</h2>
          <h3>{leftShoulderFlexion.toFixed(1)}°</h3>
        </>
      )} */}

    {/* {trunkLean < 90 ? (
        <>
        <h2>Trunk Lean: </h2>
        <h3>{trunkLean.toFixed(1)}°</h3>
        </>
      ) : (
        <>
          <h2>Trunk Lean: Safe Range</h2>
          <h3>{trunkLean.toFixed(1)}°</h3>
        </>
      )} */}


      {/* <h3>{armHeight.toFixed(1)}°</h3> */}

      {leftKneeFlexion < 90 ? (
        <>
        <h2>Knee Flexion: Less knee flexion</h2>
        <h3>{leftKneeFlexion.toFixed(1)}°</h3>
        </>
      ) : (
        <>
          <h2>Knee Flexion: Safe Range</h2>
          <h3>{leftKneeFlexion.toFixed(1)}°</h3>
        </>
      )}

      {leftHipFlexion < 100 ? (
        <>
        <h2>Hip Flexion: Bring your chest up</h2>
        <h3>{leftHipFlexion.toFixed(1)}°</h3>
        </>
      ) : (
        <>
        <h2>Hip Flexion: Safe range</h2>
        <h3>{leftHipFlexion.toFixed(1)}°</h3>
        </>
      )}

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