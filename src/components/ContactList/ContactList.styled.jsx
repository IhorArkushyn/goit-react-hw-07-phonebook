import styled, { keyframes } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  width: 360px;
`;

export const Text = styled.p`
  padding: 0 15px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-bottom: 20px;
  margin-left: 70px;

  animation: ${spin} 1s ease-in-out infinite;
`;
