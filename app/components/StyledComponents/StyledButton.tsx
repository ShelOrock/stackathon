import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonStylePropTypes {
  variant?: string;
  active?: boolean;
}

export const AllButtonStyles = css<ButtonStylePropTypes>`
  color: ${ ({ variant, theme }) => variant ? theme.colors[variant].fontColor : theme.colors.default.fontColor };
  background-color: ${ ({ variant, theme }) => variant ? theme.colors[variant].base : theme.colors.default.base };
  border: ${ ({ variant, theme }) => variant == 'tertiary' ? `1px solid ${ theme.colors.default.base }` : 'none' };
  border-radius: 5px;
  text-transform: uppercase;
  margin: 0.25rem 0.25rem;
  font-size: 1rem;
  font-family: ${ ({ theme }) => theme.font.fontFamily};
  line-height: 1rem;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${ ({ variant, theme }) => variant ? theme.colors[variant].hover : theme.colors.default.hover };
  }
`;

export const Button = styled.button`
  ${ AllButtonStyles }
  padding: 0.5rem 1rem;
`;

export const SmallButton = styled.button`
  ${ AllButtonStyles }
  padding: 0.15rem 0.4rem;
  font-size: 0.7rem;
`;

export const LinkButton = styled(Link)`
  ${ AllButtonStyles }
  padding: 0.5rem 1rem;
  text-decoration: none;
  cursor: default;
  display: block;
  text-align:center;
`;

export const PillButton = styled.button<ButtonStylePropTypes>`
  ${ AllButtonStyles }
  padding: 0.25rem;
  border-radius: 50%;
  border: ${ ({ active }) => active ? '1px solid black' : 'none' };
`