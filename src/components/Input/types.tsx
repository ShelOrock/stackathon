import { Styles } from "../../enums";
import { StylesTypes } from "../../types";

interface ComponentPropTypes extends StylesTypes.MarginPropTypes, StylesTypes.PaddingPropTypes {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color: Styles.Colors;
};

interface StylingPropTypes extends
  Omit<ComponentPropTypes,
    | "name"
    | "value"
    | "placeholder"
    | "onChange"
  >,
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {};

interface StyledElementPropTypes extends
  StylesTypes.StyledPropTypes<StylingPropTypes>,
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
