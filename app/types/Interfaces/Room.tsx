export interface RoomTypes {
  index?: number;
  xPos?: number;
  yPos?: number;
  zAxis?: number;
  width?: number;
  height?: number;
  label?: string;
  isHighlighted?: boolean;
  isLocked?: boolean;
  isHidden?: boolean;
  isDisabled?: boolean;
  floor?: number;
  tag?: string;
};

export type RoomsType = RoomTypes[];