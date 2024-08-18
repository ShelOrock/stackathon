import { Directions } from "../../enums";

export interface DoorTypes {
  id?: number;
  xPosition?: number;
  yPosition?: number;
  xPos?: number; // TODO: Delete
  yPos?: number; // TODO: Delete
  width?: number;
  height?: number;
  label?: string;
  orientation?: Directions;
  isHighlighted?: boolean;
  isLocked?: boolean;
  isHidden?: boolean;
  isDisabled?: boolean;
  floor?: number;
  tag?: string;
};

export type DoorsType = DoorTypes[];

export type Door3DTypes = DoorTypes & JSX.IntrinsicElements["mesh"];