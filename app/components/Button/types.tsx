import { StylesTypes } from "../../types";
import { MarginPropTypes } from "../../types/styles";

interface ComponentPropTypes extends
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  variant?: string; // TODO
  color?: string; // TODO
  children: React.ReactNode;
};

interface StylingPropTypes extends
  Omit<ComponentPropTypes,
  | "onClick"
  | "children"
>,
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {};

interface StyledElementPropTypes extends StylesTypes.StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
