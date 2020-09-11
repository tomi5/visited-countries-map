import styled from "styled-components";

export const ModalBodyWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 60%;
  background-color: ${({ theme }) => theme.element};
  top: 50%;
  left: 50%;
  color: ${({ theme }) => theme.text};
  transform: translate(-50%, -50%);
  outline: none;
`;
