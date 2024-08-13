import { StyledPropTypes } from "../../../types";

interface ComponentPropTypes {
  row: number;
};

interface StylingPropTypes extends Omit<ComponentPropTypes, ""> {};

interface StyledElementPropTypes extends StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
