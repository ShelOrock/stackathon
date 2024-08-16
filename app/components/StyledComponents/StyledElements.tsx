import styled from 'styled-components';
import { Directions } from '../../enums';

interface ElementPropTypes {
  variant?: string;
  width?: number;
  height?: number;
  orientation?: Directions;
}

export const Room = styled.div<ElementPropTypes>`
  position: absolute;
  top: 0;
  left: 0;
  border: 4px solid ${ ({ variant, theme }) => theme.colors[variant].base };
  box-sizing: border-box;
  width: ${ props => props.width };
  height: ${ props => props.height };
`;