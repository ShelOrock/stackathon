import { StyledPropTypes } from "../../types";

interface ComponentPropTypes {
  justifyContent?: string;
  alignItems?: string;
  children: React.ReactNode;
};

interface StylingPropTypes extends Omit<ComponentPropTypes, "children"> {};

interface StyledElementPropTypes extends StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
