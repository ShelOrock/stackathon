import { StylesTypes } from "../../types";

interface ComponentPropTypes extends StylesTypes.MarginPropTypes, StylesTypes.PaddingPropTypes {
  justifyContent?: string;
  alignItems?: string;
  children: React.ReactNode;
};

interface StylingPropTypes extends Omit<ComponentPropTypes, "children"> {};

interface StyledElementPropTypes extends StylesTypes.StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
