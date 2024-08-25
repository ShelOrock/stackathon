import { HandlerTypes } from ".";

interface PositionPropTypes {
  x: number;
  y: number;
};

interface SizePropTypes {
  width: number;
  height: number;
};

type OnDragStopType = (e: any, delta) => void;

type OnResizeType = (
  e: MouseEvent | TouchEvent,
  direction: any,
  ref: React.ElementRef<"div">,
  delta,
  position,
) => void;

interface RndPropTypes {
  dragGrid: [ number, number ];
  resizeGrid?: [ number, number ];
  enableResizing?: boolean;
  position: PositionPropTypes;
  size: SizePropTypes;
  onDragStop: OnDragStopType;
  onResize?: OnResizeType;
  onDoubleClick?: HandlerTypes.OnClickType;
  disableDragging?: boolean;
  enabledResize?: boolean;
};

export {
  PositionPropTypes,
  SizePropTypes,
  OnDragStopType,
  OnResizeType,
  RndPropTypes
};
