import { StylesTypes } from "../../types";
import { Directions, Styles } from "../../enums";

interface ComponentPropTypes extends
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {
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
  tag: Styles.Colors;
  rooms: any[];
  activeRoom: any;
};

export {
  ComponentPropTypes,
};
