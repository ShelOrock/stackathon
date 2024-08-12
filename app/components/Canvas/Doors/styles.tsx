import styled from "styled-components";

interface ElementPropTypes {
  variant?: string;
  width?: number;
  height?: number;
  orientation?: "NS" | "WE";
}

const StyledDoor = styled.div<ElementPropTypes>`
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ width, height, orientation }) => orientation == "NS" ? `translate(-${ width / 2 }px, 0)` : `translate(0, -${ height / 2 }px)` };
  border: 6px solid ${ ({ variant, theme }) => theme.colors[variant].base };
  box-sizing: border-box;
  width: ${ props => props.width };
  height: ${ props => props.height };
  background-color: ${ ({ variant, theme }) => theme.colors[variant].base };
`;

export default StyledDoor;
