import { Directions } from "../../enums";
import { StyledPropTypes } from "../../types";

interface ComponentPropTypes {
  index: number;
  label: string;
  isDisabled: boolean;
  isHidden: boolean;
  isHighlighted: boolean;
  isLocked: boolean;
  height: number;
  width: number;
  orientation: Directions;
  xPosition: number;
  yPosition: number;
  xPos: number;
  yPos: number;
  tag: string;
  variant?: string;
};

interface StylingPropTypes extends Omit<ComponentPropTypes,
  | "index"
  | "label"
  | "isDisabled"
  | "isHidden"
  | "isHighlighted"
  | "isLocked"
  | "tag"
  | "xPosition"
  | "yPosition"
  | "xPos"
  | "yPos"
> {};

interface StyledElementPropTypes extends StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
