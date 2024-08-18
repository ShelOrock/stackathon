import { Directions } from "../../enums";

export interface WindowTypes {
  id?: number;
  label?: string;
  xPosition?: number;
  yPosition?: number;
  width?: number;
  height?: number;
  orientation?: Directions;
  isHighlighted?: boolean;
  isLocked?: boolean;
  isHidden?: boolean;
  isDisabled?: boolean;
  floor?: number;
  tag?: string;
};

export type WindowsType = WindowTypes[];

export type Window3DTypes = WindowTypes & JSX.IntrinsicElements['mesh'];