import { StyledPropTypes } from "../../types";

type OnDragStopType = (e: MouseEvent | TouchEvent, delta: any) => void;

type OnResizeType = (
  e: MouseEvent | TouchEvent,
  direction: any,
  ref: React.ElementRef<"div">,
  delta: any,
  position: any
) => void;

type OnDoubleClickType = () => void;

interface ComponentPropTypes {
  disableDragging?: boolean;
  dragGrid?: [ number, number ];
  enableResizing?: boolean;
  resizeGrid?: [ number, number ];
  xPosition: number;
  yPosition: number;
  width: number;
  height: number;
  onDragStop?: OnDragStopType; // TODO
  onResize?: OnResizeType;
  onDoubleClick?: OnDoubleClickType;
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
  | "onDragStop"
  | "onResize"
  | "onDoubleClick"
  | "children"
> {};

interface StyledElementPropTypes extends StyledPropTypes<StylingPropTypes> {
  $isDisabled: boolean;
};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
