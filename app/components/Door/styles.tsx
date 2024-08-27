import styled from "styled-components";

import { StyledElementPropTypes } from "./types";

import { Directions } from "../../enums";

const StyledDoor = styled.div<StyledElementPropTypes>`
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ $width, $height, $orientation }) => $orientation === Directions.NORTH_SOUTH ? `translate(-${ $width / 2 }px, 0)` : `translate(0, -${ $height / 2 }px)` };
  border-width: 6px;
  border-style: solid;
  box-sizing: border-box;
  width: ${ ({ $width }) => $width };
  height: ${ ({ $height }) => $height };

  border-color: ${ ({ theme, $tag, $isDisabled, $isHighlighted }) => {
    if($isDisabled) {
      return theme.colors.disabled;
    };

    if($isHighlighted) {
      return theme.colors[$tag].default;
    }

    return theme.colors.black;
  } };
`;

export default StyledDoor;
