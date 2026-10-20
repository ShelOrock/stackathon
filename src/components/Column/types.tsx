import { StylesTypes } from "../../types";
import { MarginPropTypes, PaddingPropTypes } from "../../types/styles";

interface ComponentPropTypes extends
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {
  justifyContent?: string;
  alignItems?: string;
  children: React.ReactNode;
};

interface StylingPropTypes extends
  Omit<ComponentPropTypes, "children">,
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {};

interface StyledElementPropTypes extends
  StylesTypes.StyledPropTypes<StylingPropTypes>,
  MarginPropTypes,
  PaddingPropTypes {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
