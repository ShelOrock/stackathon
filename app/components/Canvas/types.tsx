import { StyledPropTypes } from "../../types";

interface ComponentPropTypes {
  canvasSize: number;
  children: React.ReactNode;
};

interface StylingPropTypes extends Omit<ComponentPropTypes, "children"> {};

interface StyledElementPropTypes extends StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
