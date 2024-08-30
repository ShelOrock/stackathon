import React from "react";
import { useAppSelector } from "../../../hooks";

export default () => {

  const { sunPosition } = useAppSelector(state => state);
  
  return (
    <>
      <ambientLight
        color="#EEE"
        intensity={ 0.6 }
      />
      <directionalLight
        castShadow
        position={ [parseInt(sunPosition), Math.cos((parseInt(sunPosition) * 1.8) * (Math.PI / 180)) * 50, 0] } color="#DDD" />
    </>
  );
};