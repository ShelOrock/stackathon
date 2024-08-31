import React from "react";
import { ComponentPropTypes } from "./types";

const BoxGeometry: React.FC<ComponentPropTypes> = ({
  width,
  height,
  depth
}) => (
  <boxGeometry args={ [ width, height, depth ] } />
);

export default BoxGeometry;
