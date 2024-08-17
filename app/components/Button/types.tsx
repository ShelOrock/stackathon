import { StyledPropTypes } from "../../types";

interface ComponentPropTypes {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: string; // TODO
  isDisabled?: boolean;
  children: React.ReactNode;
};

interface StylingPropTypes extends Omit<ComponentPropTypes,
  | "onClick"
  | "children"
> {};

interface StyledElementPropTypes extends StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
