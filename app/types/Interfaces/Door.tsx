export interface DoorTypes {
  index?: number;
  xPos?: number;
  yPos?: number;
  width?: number;
  height?: number;
  label?: string;
  orientation?: "NS" | "WE";
  isHighlighted?: boolean;
  isLocked?: boolean;
  isHidden?: boolean;
  isDisabled?: boolean;
  floor?: number;
  tag?: string;
};

export type DoorsType = DoorTypes[];

export type Door3DTypes = DoorTypes & JSX.IntrinsicElements["mesh"];