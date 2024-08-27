import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonStylePropTypes {
  variant?: string;
  active?: boolean;
}


export const SmallButton = styled.button`
  padding: 0.15rem 0.4rem;
  font-size: 0.7rem;
`;

export const LinkButton = styled(Link)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  cursor: default;
  display: block;
  text-align:center;
`;

export const PillButton = styled.button<ButtonStylePropTypes>`
  padding: 0.25rem;
  border-radius: 50%;
  border: ${ ({ active }) => active ? '1px solid black' : 'none' };
`