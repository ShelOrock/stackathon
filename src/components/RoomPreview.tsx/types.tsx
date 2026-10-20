import { StylesTypes } from "../../types";

interface ComponentPropTypes extends StylesTypes.MarginPropTypes, StylesTypes.PaddingPropTypes {
  xPosition: number;
  yPosition: number;
};

export {
  ComponentPropTypes,
};
