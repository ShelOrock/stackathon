import { Styles } from "../../enums";
import { StylesTypes } from "../../types";

interface ComponentPropTypes extends StylesTypes.MarginPropTypes, StylesTypes.PaddingPropTypes {
  id: number;
  label: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  isHighlighted?: boolean;
  isLocked?: boolean;
  height: number;
  width: number;
  xPosition: number;
  yPosition: number;
  tag: Styles.Colors.blue;
  rooms: any[];
};

export {
  ComponentPropTypes,
};
