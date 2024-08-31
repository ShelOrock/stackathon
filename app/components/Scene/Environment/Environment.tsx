import React from "react";
import { ReactReduxContext } from "react-redux"
import { Canvas } from "@react-three/fiber";
import { useContextBridge } from "@react-three/drei";

import Sky from "./Sky";
import OrbitControls from "./OrbitControls"
import GroundPlane from "./GroundPlane";
import Composition from "./Composition/Composition";
import Lighting from "../../Lighting";

export default () => {

  const ContextBridge = useContextBridge(ReactReduxContext);

  return (
    <Canvas
      shadows
      camera={{ position: [ 80, 80, 80 ] as [ number, number, number] } }
    >
      <ContextBridge>
        <Sky />
        <OrbitControls />
        <Lighting />
        <GroundPlane />
        <Composition />
      </ContextBridge>
    </Canvas>
  )
};
