import styled from "styled-components";

import { StyledElementPropTypes } from "./types";

import { Directions } from "../../enums";

const StyledWindow = styled.div<StyledElementPropTypes>`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-width: 4px;
  border-style: solid;
  transform: ${ ({ $width, $height , $orientation }) => $orientation === Directions.NORTH_SOUTH ? `translate(-${ $width * 2 }px, 0)` : `translate(0, -${ $height * 2 }px)` };
  width: ${ ({ $width }) => $width};
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

export default StyledWindow;
