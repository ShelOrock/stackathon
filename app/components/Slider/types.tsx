import { StylesTypes } from "../../types";

interface ComponentPropTypes extends
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {
  min: string;
  max: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

interface StylingPropTypes extends
  Omit<ComponentPropTypes,
  | "min"
  | "max"
  | "value"
  | "onChange"
  >,
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {};

interface StyledElementPropTypes extends StylesTypes.StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
