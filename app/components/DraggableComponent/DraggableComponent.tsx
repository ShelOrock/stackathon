import React from "react";

import { ComponentPropTypes } from "./types";
import StyledDraggableComponent from "./styles";

const DraggableComponent: React.FC<ComponentPropTypes> = ({
  disableDragging = false,
  dragGrid,
  enableResizing = false,
  resizeGrid,
  xPosition,
  yPosition,
  width,
  height,
  onDrag,
  onDragStop,
  onResize,
  onDoubleClick,
  children
}) => (
  <StyledDraggableComponent
    bounds="parent"
    disableDragging={ disableDragging }
    dragGrid={ dragGrid }
    enableResizing={ enableResizing }
    resizeGrid={ resizeGrid }
    position={ {
      x: xPosition,
      y: yPosition
    } }
    size={ {
      width,
      height
    } }
    onDrag={ onDrag }
    onDragStop={ onDragStop }
    onResize={ onResize }
    onDoubleClick={ onDoubleClick }
    $isDisabled={ disableDragging }
  >{ children }</StyledDraggableComponent>
);

export default DraggableComponent;
