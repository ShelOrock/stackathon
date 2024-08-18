import { AppData, Directions } from "../../enums";

export interface ElementTypes {
  type: AppData;
  id?: number;
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
  orientation?: Directions;
  tag?: string;
};
  
export type ElementsType = ElementTypes[];