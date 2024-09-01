import { ReactTypes, StylesTypes } from "../../types";

interface ComponentPropTypes {
  disableDragging?: boolean;
  dragGrid?: [ number, number ];
  enableResizing?: boolean;
  resizeGrid?: [ number, number ];
  xPosition: number;
  yPosition: number;
  width: number;
  height: number;
  onDrag?: ReactTypes.RndTypes.OnDragType;
  onDragStop?: ReactTypes.RndTypes.OnDragStopType;
  onResize?: ReactTypes.RndTypes.OnResizeType;
  onDoubleClick?: ReactTypes.HandlerTypes.OnClickType;
  children: React.ReactNode;
};


interface StylingPropTypes extends Omit<ComponentPropTypes,
  | "disableDragging"
  | "dragGrid"
  | "enableResizing"
  | "resizeGrid"
  | "xPosition"
  | "yPosition"
  | "width"
  | "height"
  | "onDrag"
  | "onDragStop"
  | "onResize"
  | "onDoubleClick"
  | "children"
> {};

interface StyledElementPropTypes extends StylesTypes.StyledPropTypes<StylingPropTypes> {
  $isDisabled: boolean;
};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
