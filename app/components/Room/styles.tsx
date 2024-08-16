import styled from 'styled-components';

import { StyledElementPropTypes } from './types';

const StyledRoom = styled.div<StyledElementPropTypes>`
  position: absolute;
  top: 0;
  left: 0;
  border: 4px solid ${ ({ theme, $variant }) => theme.colors[$variant].base };
  box-sizing: border-box;
  width: ${ ({ $width }) => $width };
  height: ${ ({ $height }) => $height };
`;

export default StyledRoom;