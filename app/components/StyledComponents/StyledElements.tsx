import styled from 'styled-components';

interface ElementPropTypes {
  variant?: string;
  width?: number;
  height?: number;
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

export const Door = styled.div<ElementPropTypes>`
  position: absolute;
  top: 0;
  left: 0;
  border: 4px solid ${ ({ variant, theme }) => theme.colors[variant].base };
  box-sizing: border-box;
  width: ${ props => props.width };
  height: ${ props => props.height };
  background-color: ${ ({ variant, theme }) => theme.colors[variant].base };
`;