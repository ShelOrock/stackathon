import { StyledPropTypes } from "../../../types";

interface ComponentPropTypes {
  id: number;
  label: string;
  isHidden: boolean;
  isLocked: boolean;
};

interface StylingPropTypes extends Omit<ComponentPropTypes, 
  | "id"
  | "label"
  | "isHidden"
  | "isLocked"
> {};

interface StyledElementPropTypes extends StyledPropTypes<StylingPropTypes> {};

export { 
  ComponentPropTypes,
  StyledElementPropTypes
};
