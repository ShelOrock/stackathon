import React, { useRef } from "react";
import THREE from "three";
import { useAppSelector } from "../../../hooks";
import Mesh from "../../Mesh";

const GroundPlane = () => {

  const TRANSLATION_0_UNITS: number = 0;
  const ROTATION_0_DEGREES: number = 0;
  const ROTATION_90_DEGREES: number = Math.PI / 2;

  const { sunPosition } = useAppSelector(state => state);
  const numericalSunPosition = Math.abs(parseInt(sunPosition))

  const ref = useRef<THREE.Mesh>(null!);

  return (
    <Mesh
      innerRef={ ref }
      xPosition={ TRANSLATION_0_UNITS }
      yPosition={ TRANSLATION_0_UNITS }
      zPosition={ TRANSLATION_0_UNITS }
      xRotation={ ROTATION_90_DEGREES }
      yRotation={ ROTATION_0_DEGREES }
      zRotation={ ROTATION_0_DEGREES }
      receiveShadow
    >
      <planeGeometry args={[ 200, 200 ]} />
      <meshPhongMaterial color={ `rgb(${ 234 - Math.floor(numericalSunPosition * 1.25) }, ${ 209 - Math.floor(numericalSunPosition * 1.25) }, ${ 175 - Math.floor(numericalSunPosition * 1.25) })` } side={ THREE.DoubleSide } />
    </Mesh>
  );
};

export default GroundPlane;
