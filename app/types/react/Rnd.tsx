import { OnDoubleClickType } from '.';

interface PositionPropTypes {
  x: number;
  y: number;
};

interface SizePropTypes {
  width: number;
  height: number;
};

export type OnDragStopType = (e: any, delta) => void;

export type OnResizeType = (
  e: MouseEvent | TouchEvent,
  direction: any,
  ref: React.ElementRef<'div'>,
  delta,
  position,
) => void;

export interface RndPropTypes {
  dragGrid: [ number, number ];
  resizeGrid?: [ number, number ];
  enableResizing?: boolean;
  position: PositionPropTypes;
  size: SizePropTypes;
  onDragStop: OnDragStopType;
  onResize?: OnResizeType;
  onDoubleClick?: OnDoubleClickType;
  disableDragging?: boolean;
  enabledResize?: boolean;
  style?: { [key: string]: string };
};