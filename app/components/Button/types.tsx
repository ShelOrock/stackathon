import { Styles } from "../../enums";
import { StylesTypes } from "../../types";

interface ComponentPropTypes extends
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  variant?: Styles.ButtonVariants;
  color?: Styles.Colors;
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
