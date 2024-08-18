import { StyledPropTypes } from "../../../types";

interface ComponentPropTypes {
  index: number;
  label: string;
  isHidden: boolean;
  isLocked: boolean;
};

interface StylingPropTypes extends Omit<ComponentPropTypes, 
  | "index"
  | "label"
  | "isHidden"
  | "isLocked"
> {};

interface StyledElementPropTypes extends StyledPropTypes<StylingPropTypes> {};

export { 
  ComponentPropTypes,
  StyledElementPropTypes
};
