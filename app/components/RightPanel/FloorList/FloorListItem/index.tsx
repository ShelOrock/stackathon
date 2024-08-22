import React from "react";

import FloorLayer from "./FloorLayer";
import ElementList from "./ElementList";

export default ({
  id,
  isHidden,
  activeFloorId
}) => {

  return (
    <>
      <FloorLayer
        id={ id }
        isHidden={ isHidden }
        activeFloorId={ activeFloorId }
      />
      { !isHidden && <ElementList floorId={ id } /> }
    </>
  )
};