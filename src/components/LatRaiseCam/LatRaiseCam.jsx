import "./LatRaiseCam.scss";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { drawKeypoints, drawSkeleton } from "../../utilities/utilities";
import { useRef, useState, useEffect } from "react";

export const LatRaiseCam = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [rightArmAngle, setRightArmAngle] = useState(0);
  const [leftArmAngle, setLeftArmAngle] = useState(0);
//   const [trunkLean, setTrunkLean] = useState(0);
//   const [leftKneeFlexion, setLeftKneeFlexion] = useState(0);
//   const [leftHipFlexion, setLeftHipFlexion] = useState(0);
//   const [dorsiflexion, setDorsiflexion] = useState(0);
//   const [armHeight, setArmHeight] = useState(0);

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
       * Lat Raise
       */
      /*
       * Right Arm
       * Proper form: angle from 80° to 100°
       * >80° Bring your arm up
       * <100° Lower your arm down
       */
      if (
        rightElbow.score > 0.5 &&
        rightShoulder.score > 0.5 &&
        rightHip.score > 0.5
      ) {
        const rightArmAngleValue =
          (Math.atan2(
            rightElbow.position.y - rightShoulder.position.y,
            rightElbow.position.x - rightShoulder.position.x
          ) -
            Math.atan2(
              rightHip.position.y - rightShoulder.position.y,
              rightHip.position.x - rightShoulder.position.x
            )) *
          (180 / Math.PI);
        rightArmAngle(rightArmAngleValue);
      }

           /*
       * Left Arm
       * Proper form: angle from 80° to 100°
       * >80° Bring your arm up
       * <100° Lower your arm down
       */

      if (
        leftElbow.score > 0.5 &&
        leftShoulder.score > 0.5 &&
        leftHip.score > 0.5
      ) {
        const leftArmAngleValue =
          (Math.atan2(
            leftElbow.position.y - leftShoulder.position.y,
            leftElbow.position.x - leftShoulder.position.x
          ) -
            Math.atan2(
                leftHip.position.y - leftShoulder.position.y,
                leftHip.position.x - leftShoulder.position.x
            )) *
          (180 / Math.PI);
          leftArmAngle(leftArmAngleValue);
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
    <div className="lat-raise-cam">
      <section className="lat-raise-cam__feedback-container">
        <div className="lat-raise-cam__feedback-card">
          <h3 className="lat-raise-cam__feedback-header">Right Arm Height</h3>
          {rightArmAngle < 80 ? (
            <>
              <h2 className="lat-raise-cam__feedback--up">Raise Right Arm</h2>
              {/* <h3 className="lat-raise-cam__feedback-header">{leftKneeFlexion.toFixed(1)}°</h3> */}
            </>
          ) : rightArmAngle >= 80 && rightArmAngle <= 110 ? (
            <>
              <h2 className="lat-raise-cam__feedback--safe">Great Form!</h2>
              {/* <h3 className="lat-raise-cam__feedback-header">{leftKneeFlexion.toFixed(1)}°</h3> */}
            </>
          ) : (
            <>
              <h2 className="lat-raise-cam__feedback--down">Lower Right Arm</h2>
              {/* <h3 className="lat-raise-cam__feedback-header">{leftKneeFlexion.toFixed(1)}°</h3> */}
            </>
          )}
        </div>

        <div className="lat-raise-cam__feedback-card">
          <h3 className="lat-raise-cam__feedback-header">Left Arm Height</h3>
          {leftArmAngle < 80 ? (
            <>
              <h2 className="lat-raise-cam__feedback--up">Raise Left Arm</h2>
              {/* <h3 className="lat-raise-cam__feedback-header">{leftKneeFlexion.toFixed(1)}°</h3> */}
            </>
          ) : leftArmAngle >= 80 && leftArmAngle <= 110 ? (
            <>
              <h2 className="lat-raise-cam__feedback--safe">Fantastic Form!</h2>
              {/* <h3 className="lat-raise-cam__feedback-header">{leftKneeFlexion.toFixed(1)}°</h3> */}
            </>
          ) : (
            <>
              <h2 className="lat-raise-cam__feedback--down">Lower Left Arm</h2>
              {/* <h3 className="lat-raise-cam__feedback-header">{leftKneeFlexion.toFixed(1)}°</h3> */}
            </>
          )}
        </div>
      </section>

      <div className="lat-raise-cam__cam-canvas">
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
      <Link to="/exercises" className="lat-raise-cam__link">
        {/* <AnchorLink href='#lat-raise'> */}
        ⬅️Back
        {/* </AnchorLink> */}
      </Link>
    </div>
  );
};
