import { StylesTypes } from "../../types";
import { Directions } from "../../enums";

interface ComponentPropTypes extends StylesTypes.MarginPropTypes, StylesTypes.PaddingPropTypes {
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
};

interface StylingPropTypes extends Omit<ComponentPropTypes,
  | "id"
  | "label"
  | "isHidden"
  | "isLocked"
  | "xPosition"
  | "yPosition"
> {};

interface StyledElementPropTypes extends StylesTypes.StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
