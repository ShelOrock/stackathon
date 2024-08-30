import React, { useRef } from "react";
import { useThree, extend } from "@react-three/fiber"
import { OrbitControls } from "three-stdlib";

extend({ OrbitControls });

export default () => {

  const three = useThree();
  const controls = useRef();
  
  return <orbitControls ref={ controls } args={ [three.camera, three.gl.domElement] } />
};
