import { StylesTypes } from "../../types";

interface ComponentPropTypes extends StylesTypes.MarginPropTypes, StylesTypes.PaddingPropTypes {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: string; // TODO
  isDisabled?: boolean;
  children: React.ReactNode;
};

interface StylingPropTypes extends Omit<ComponentPropTypes,
  | "onClick"
  | "children"
> {};

interface StyledElementPropTypes extends StylesTypes.StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
