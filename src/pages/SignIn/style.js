import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0px;
    padding: 0px;
    animation: ${rotate} 1s linear infinite;
  }
`;
