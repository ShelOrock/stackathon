import { StylesTypes } from "../../types";
import { Styles } from "../../enums";

interface ComponentPropTypes extends
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  variant: Styles.ButtonVariants;
  color: Styles.Colors;
};

interface StylingPropTypes extends
  Omit<ComponentPropTypes, "onClick">,
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {};

interface StyledElementPropTypes extends StylesTypes.StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
