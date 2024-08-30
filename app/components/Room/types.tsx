import { Styles } from "../../enums";
import { StylesTypes } from "../../types";

interface ComponentPropTypes extends StylesTypes.MarginPropTypes, StylesTypes.PaddingPropTypes {
  id: number;
  label: string;
  isDisabled: boolean;
  isHidden: boolean;
  isHighlighted: boolean;
  isLocked: boolean;
  height: number;
  width: number;
  xPosition: number;
  yPosition: number;
  tag: Styles.Colors.blue;
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
