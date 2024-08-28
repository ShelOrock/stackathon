import styled from "styled-components";
import * as utilities from "../../utilities";

import { StyledElementPropTypes } from "./types";
import { Styles } from "../../enums";

const StyledButton = styled.button<StyledElementPropTypes>`
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  text-transform: uppercase;
  font-family: ${ ({ theme }) => theme.font.fontFamily };

  background-color: ${ ({ theme, $variant, $color, $isDisabled }) => {
    switch($variant) {
      case Styles.ButtonVariants.primary:
      default:
        if($isDisabled) {
          return theme.colors.disabled;
        };

        return theme.colors[$color].default;

      case Styles.ButtonVariants.secondary:
      case Styles.ButtonVariants.tertiary:
        return theme.colors.transparent;
    };
  } };

  color: ${ ({ theme, $variant, $color, $isDisabled }) => {
    switch($variant) {
      case Styles.ButtonVariants.primary:
      default:
        return theme.colors.white;

      case Styles.ButtonVariants.secondary:
      case Styles.ButtonVariants.tertiary:
        if($isDisabled) {
          return theme.colors.disabled;
        };

        return theme.colors[$color].default;
    };
  } };

  border-color: ${ ({ theme, $variant, $color, $isDisabled }) => {
    switch($variant) {
      case Styles.ButtonVariants.primary:
      case Styles.ButtonVariants.secondary:
      default:
        if($isDisabled) {
          return theme.colors.disabled;
        };

        return theme.colors[$color].default;

      case Styles.ButtonVariants.tertiary:
        return theme.colors.transparent;
    };
  } };

  &:hover {
    background-color: ${ ({ theme, $variant, $color, $isDisabled }) => {
      switch($variant) {
        case Styles.ButtonVariants.primary:
        default:
          if($isDisabled) {
            return theme.colors.disabled;
          };

          return theme.colors[$color].hover;

        case Styles.ButtonVariants.secondary:
        case Styles.ButtonVariants.tertiary:
          return theme.colors.transparent;
      };
    } };

    color: ${ ({ theme, $variant, $color, $isDisabled }) => {
      switch($variant) {
        case Styles.ButtonVariants.primary:
        default:
          return theme.colors.white;

        case Styles.ButtonVariants.secondary:
        case Styles.ButtonVariants.tertiary:
          if($isDisabled) {
            return theme.colors.disabled;
          };

          return theme.colors[$color].hover;
      };
    } };

    border-color: ${ ({ theme, $variant, $color, $isDisabled }) => {
      switch($variant) {
        case Styles.ButtonVariants.primary:
        case Styles.ButtonVariants.secondary:
        default:
          if($isDisabled) {
            return theme.colors.disabled;
          };

          return theme.colors[$color].hover;

        case Styles.ButtonVariants.tertiary:
          return theme.colors.transparent;
      };
    } };
  };

  &:focus: {
    outline: none;
  };

  ${ ({ ...spacingProps }) => utilities.styles.createMargins(spacingProps) };
  ${ ({ ...spacingProps }) => utilities.styles.createPaddings(spacingProps) };
`;

export default StyledButton;
