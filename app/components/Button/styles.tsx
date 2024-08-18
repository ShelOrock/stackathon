import styled from "styled-components";

import { StyledElementPropTypes } from "./types";

const StyledButton = styled.button<StyledElementPropTypes>`
  background-color: ${ ({ theme, $variant }) => theme.colors[$variant].base };
  color: ${ ({ theme, $variant }) => "black" };
  border: ${ ({ theme, $variant }) => $variant === "primary" || $variant === "secondary" ? `1px solid ${ theme.colors[$variant].base }` : "none" };
  border-radius: 4px;
  text-transform: uppercase;
  font-family: ${ ({ theme }) => theme.font.fontFamily };

  &:focus: {
    outline: none;
  }

  &hover: {
    background-color: ${ ({ theme, $variant }) => theme.colors[$variant].hover };
  }
`;

export default StyledButton;