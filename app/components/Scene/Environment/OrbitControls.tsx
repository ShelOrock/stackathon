import * as React from "react";
const { useRef } = React;
import { useThree, extend } from "@react-three/fiber"
import { OrbitControls } from "three-stdlib";

extend({ OrbitControls });

export default () => {

  const three = useThree();
  const controls = useRef();

  const {
    camera,
    gl: { domElement }
  } = three;
  
  return <orbitControls ref={ controls } args={ [camera, domElement] } />
}