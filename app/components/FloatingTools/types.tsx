import { AppData, Styles } from "../../enums";
import { StylesTypes } from "../../types";

interface ComponentPropTypes extends StylesTypes.MarginPropTypes, StylesTypes.PaddingPropTypes {
  appDataType: AppData;
  id: number;
  label: string;
  isHidden: boolean;
  isLocked: boolean;
  tag?: Styles.Colors;
  xPosition: number;
  yPosition: number;
  status: string;
};

interface StylingPropTypes extends Omit<ComponentPropTypes,
  | "appDataType"
  | "id"
  | "label"
  | "isHidden"
  | "isLocked"
  | "tag"
  | "status"
> {};

interface StyledElementPropTypes extends StylesTypes.StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
