import { StyledPropTypes } from "../../types";

interface ComponentPropTypes {
  index: number;
  isDisabled: boolean;
  isHidden: boolean;
  isHighlighted: boolean;
  isLocked: boolean;
  height: number;
  width: number;
  xPosition: number;
  yPosition: number;
  xPos: number;
  yPos: number;
  tag: string;
  variant?: string;
};

interface StylingPropTypes extends Omit<ComponentPropTypes,
  | "index"
  | "isDisabled"
  | "isHidden"
  | "isHighlighted"
  | "isLocked"
  | "xPosition"
  | "yPosition"
  | "xPos"
  | "yPos"
  | "tag"
> {};

interface StyledElementPropTypes extends StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
