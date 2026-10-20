import { StylesTypes } from "../../types";

interface ComponentPropTypes extends StylesTypes.MarginPropTypes, StylesTypes.PaddingPropTypes {
  width?: string;
  children: React.ReactNode;
};

interface StylingPropTypes extends
  Omit<ComponentPropTypes, "children">,
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {};

interface StyledElementPropTypes extends StylesTypes.StyledPropTypes<StylingPropTypes>,
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
