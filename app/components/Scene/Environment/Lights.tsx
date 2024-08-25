import React from "react";
import { useAppSelector } from "../../../hooks";

export default () => {

  const { sunPosition } = useAppSelector(state => state);
  return (
    <>
      <ambientLight />
      <directionalLight
        castShadow
        position={[0, 1, parseInt(sunPosition)]} color="#DDD" />
    </>
  );
};