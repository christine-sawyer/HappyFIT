import "./SquatCam.scss";
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

  const runPosenet = async () => {
    // console.log("runPosenet")
    const net = await posenet.load({
      // inputResolution:{width:640, height:480}, // removing this seemed to improve performance...
      scale: 0.5, //Smaller number faster speed but less accurate
    });
    // Run detection every 100 miliseconds
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    // Get Video Properties
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
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
      const leftShoulder = pose.keypoints[5];
      const rightShoulder = pose.keypoints[6];
      const leftElbow = pose.keypoints[7];
      const rightElbow = pose.keypoints[8];
      const leftWrist = pose.keypoints[9];
      const rightWrist = pose.keypoints[10];
      const leftHip = pose.keypoints[11];
      const rightHip = pose.keypoints[12];
      const leftKnee = pose.keypoints[13];
      const rightKnee = pose.keypoints[14];
      const leftAnkle = pose.keypoints[15];
      const rightAnkle = pose.keypoints[16];

      const leftShin = { x: leftKnee.position.x, y: leftAnkle.position.y };
      const leftSideTorso = {
        x: leftShoulder.position.x,
        y: leftHip.position.y,
      };

      const leftShoulderToWristX =
        leftShoulder.position.x - leftWrist.position.x;

      /*
       * Squat - Left side toward camera
       */
      /*
       * Knee flexion - Hip Height
       * Proper form: angle from 90° to 110°
       * >90° Bring your hips up
       * <110° Lower your hips more
       */
      if (
        leftAnkle.score > 0.5 &&
        leftKnee.score > 0.5 &&
        leftHip.score > 0.5
      ) {

        const leftKneeFlexionValue =
        (Math.atan2(
          leftAnkle.position.y - leftKnee.position.y,
          leftAnkle.position.x - leftKnee.position.x
        ) -
          Math.atan2(
            leftHip.position.y - leftKnee.position.y,
            leftHip.position.x - leftKnee.position.x
          )) *
        (180 / Math.PI);
      setLeftKneeFlexion(leftKneeFlexionValue);
          }

      /*
       * Hip flexion - Torso Lean
       * Proper form: angle from 110° to 130°
       * >110° Bring your chest up
       * <130° Bring your chest down towards thighs
       */

      if (
        leftShoulder.score > 0.5 &&
        leftKnee.score > 0.5 &&
        leftHip.score > 0.5
      ) {

      const leftHipFlexionValue =
        360 -
        (Math.atan2(
          leftKnee.position.y - leftHip.position.y,
          leftKnee.position.x - leftHip.position.x
        ) -
          Math.atan2(
            leftShoulder.position.y - leftHip.position.y,
            leftShoulder.position.x - leftHip.position.x
          )) *
          (180 / Math.PI);
      setLeftHipFlexion(leftHipFlexionValue);
          }

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
    runPosenet();
  }, []);

  return (
    <div className="squat-cam">

      <section className="squat-cam__feedback-container">
        <div className="squat-cam__feedback-card">
          <h3 className="squat-cam__feedback-header">Hip Height</h3>
          {leftKneeFlexion < 90 ? (
            <>
              <h2 className="squat-cam__feedback--up">Raise Hips Up</h2>
              {/* <h3>{leftKneeFlexion.toFixed(1)}°</h3> */}
            </>
          ) : leftKneeFlexion >= 90 && leftKneeFlexion <= 110 ? (
            <>
              <h2 className="squat-cam__feedback--safe">Great Form!</h2>
              {/* <h3>{leftKneeFlexion.toFixed(1)}°</h3> */}
            </>
          ) : (
            <>
              <h2 className="squat-cam__feedback--down">Lower Hips More</h2>
              {/* <h3>{leftKneeFlexion.toFixed(1)}°</h3> */}
            </>
          )}
        </div>

        <div className="squat-cam__feedback-card">
          <h3 className="squat-cam__feedback-header">Torso Lean</h3>
          {leftHipFlexion < 110 ? (
            <>
              <h2 className="squat-cam__feedback--up">Bring Chest Up</h2>
              {/* <h3>{leftHipFlexion.toFixed(1)}°</h3> */}
            </>
          ) : leftHipFlexion >= 110 && leftHipFlexion <= 130 ? (
            <>
              <h2 className="squat-cam__feedback--safe">Fantastic Form!</h2>
              {/* <h3>{leftHipFlexion.toFixed(1)}°</h3> */}
            </>
          ) : (
            <>
              <h2 className="squat-cam__feedback--down">
                Lower Chest To Thighs
              </h2>
              {/* <h3>{leftHipFlexion.toFixed(1)}°</h3> */}
            </>
          )}
        </div>
      </section>

      {/* <h2>Dorsiflexion</h2>
      <h2>{dorsiflexion}</h2> */}
      <div className="squat-cam__cam-canvas">
        <Webcam
          ref={webcamRef}
          style={{
            // position: "absolute",
            // marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
            transform: "scaleX(-1)",
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            // marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
            transform: "scaleX(-1)",
          }}
        />
      </div>
    </div>
  );
};
