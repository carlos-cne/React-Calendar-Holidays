import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

export const Spinner = styled.div`
  margin-top: 160px;
  width: 50px;
  height: 50px;
  border: 5px solid #a09fa0;
  border-left-color: #eee;
  border-top-color: #eee;
  border-radius: 50%;
  animation: ${rotate} 0.6s linear infinite;
`;

export const Container = styled.div`
  width: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
