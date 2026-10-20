import styled from "styled-components"

import * as utilities from "../../utilities";

import { StyledElementPropTypes } from "./types";
import { Styles } from "../../enums";

const StyledTag = styled.div<StyledElementPropTypes>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;

  background-color: ${ ({ theme, $variant, $color }) => {
    switch($variant) {
      case Styles.ButtonVariants.primary:
      default:
        return theme.colors[$color].default;

      case Styles.ButtonVariants.secondary:
      case Styles.ButtonVariants.tertiary:
        return theme.colors.transparent;
    };
  } };

  border-color: ${ ({ theme, $variant, $color }) => {
    switch($variant) {
      case Styles.ButtonVariants.primary:
      case Styles.ButtonVariants.secondary:
      default:
        return theme.colors[$color].default 

      case Styles.ButtonVariants.tertiary:
        return theme.colors.transparent;
    };
  } };

  &:hover {
    background-color: ${ ({ theme, $variant, $color }) => {
      switch($variant) {
        case Styles.ButtonVariants.primary:
        default:
          return theme.colors[$color].hover;
  
        case Styles.ButtonVariants.secondary:
        case Styles.ButtonVariants.tertiary:
          return theme.colors.transparent;
      };
    } };

    border-color: ${ ({ theme, $variant, $color }) => {
      switch($variant) {
        case Styles.ButtonVariants.primary:
        case Styles.ButtonVariants.secondary:
        default:
          return theme.colors[$color].hover 
  
        case Styles.ButtonVariants.tertiary:
          return theme.colors.transparent;
      };
    } };
  };

  ${ ({ ...spacingProps }) => utilities.styles.createMargins(spacingProps) };
`;

export default StyledTag;
