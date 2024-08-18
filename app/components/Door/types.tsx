import { Directions } from "../../enums";
import { StyledPropTypes } from "../../types";

interface ComponentPropTypes {
  id: number;
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
  tag: string;
  variant?: string;
};

interface StylingPropTypes extends Omit<ComponentPropTypes,
  | "id"
  | "label"
  | "isDisabled"
  | "isHidden"
  | "isHighlighted"
  | "isLocked"
  | "xPosition"
  | "yPosition"
  | "tag"
> {};

interface StyledElementPropTypes extends StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
