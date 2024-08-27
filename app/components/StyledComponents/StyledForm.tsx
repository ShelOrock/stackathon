import styled, { css } from 'styled-components';

const AllInputFields = css`
  border: 1px solid ${ ({ theme }) => theme.colors.green.default };
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 0.8rem;
  height: 20px;
  width: 100px;
`;

export const InputField = styled.input`
  ${ AllInputFields }
`;