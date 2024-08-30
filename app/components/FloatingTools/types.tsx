import { AppData, Styles } from "../../enums";
import { StylesTypes } from "../../types";

interface ComponentPropTypes extends StylesTypes.MarginPropTypes, StylesTypes.PaddingPropTypes {
  appDataType: AppData;
  id: number;
  label: string;
  isHidden: boolean;
  isLocked: boolean;
  tag?: Styles.Colors;
};

interface StylingPropTypes extends Omit<ComponentPropTypes,
  | "appDataType"
  | "id"
  | "label"
  | "isHidden"
  | "isLocked"
  | "tag"
> {};

interface StyledElementPropTypes extends StylesTypes.StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
