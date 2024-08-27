import styled from 'styled-components';

import { StyledElementPropTypes } from './types';

const StyledRoom = styled.div<StyledElementPropTypes>`
  position: absolute;
  top: 0;
  left: 0;
  border-width: 4px;
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

export default StyledRoom;