import React from "react";
import { extend } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";

extend({ OrbitControls });

export default () => {
  return <OrbitControls />
};
