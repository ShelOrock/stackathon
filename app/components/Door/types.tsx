import { Directions } from "../../enums";
import { StyledPropTypes } from "../../types";

interface ComponentPropTypes {
  index: number;
  isDisabled: boolean;
  isHidden: boolean;
  isHighlighted: boolean;
  isLocked: boolean;
  tag: string;
  height: number;
  width: number;
  orientation: Directions;
  xPosition: number;
  yPosition: number;
  xPos: number;
  yPos: number;
  variant?: string;
};

interface StylingPropTypes extends Omit<ComponentPropTypes,
  | "index"
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
