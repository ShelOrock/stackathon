import React from "react";
const { useRef } = React;
import THREE from "three";
import { useAppSelector } from "../../../hooks";
import Mesh from "../../Mesh";

export default () => {

  const TRANSLATION_0_UNITS: number = 0;
  const ROTATION_0_DEGREES: number = 0;
  const ROTATION_90_DEGREES: number = Math.PI / 2;

  const { sunPosition } = useAppSelector(state => state);
  const numericalSunPosition = Math.abs(parseInt(sunPosition))

  const ref = useRef<THREE.Mesh>(null!);

  return (
    <Mesh
      innerRef={ ref }
      position={ [ TRANSLATION_0_UNITS, TRANSLATION_0_UNITS, TRANSLATION_0_UNITS ]}
      rotation={ [ ROTATION_90_DEGREES, ROTATION_0_DEGREES, ROTATION_0_DEGREES ] }
      receiveShadow
    >
      <planeGeometry args={[ 200, 200 ]} />
      <meshPhongMaterial color={ `rgb(${ 234 - Math.floor(numericalSunPosition * 1.25) }, ${ 209 - Math.floor(numericalSunPosition * 1.25) }, ${ 175 - Math.floor(numericalSunPosition * 1.25) })` } side={ THREE.DoubleSide } />
    </Mesh>
  );
};