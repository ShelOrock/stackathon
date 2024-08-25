import React from "react";
import { ReactReduxContext } from "react-redux"
import { Canvas } from "@react-three/fiber";
import { useContextBridge } from "@react-three/drei";

import Sky from "./Sky";
import OrbitControls from "./OrbitControls"
import Lights from "./Lights";
import GroundPlane from "./GroundPlane";
import Composition from "./Composition/Composition";

export default () => {

  const ContextBridge = useContextBridge(ReactReduxContext);

  return (
    <Canvas
      shadows
      camera={{ position: [80, 50, 90] as any }
    }>
      <ContextBridge>
        <Sky />
        <OrbitControls />
        <Lights />
        <GroundPlane />
        <Composition />
      </ContextBridge>
    </Canvas>
  )
};
