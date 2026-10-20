import { Directions } from "../../enums";
import { StylesTypes } from "../../types";

interface ComponentPropTypes extends StylesTypes.MarginPropTypes, StylesTypes.PaddingPropTypes {
  xPosition: number;
  yPosition: number;
  orientation: Directions;
  isValid;
};

export {
  ComponentPropTypes,
};
