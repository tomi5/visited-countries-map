import styled from "styled-components";

export const ModalBodyWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 40%;
  background: ${({ theme }) => theme.element};
  top: 50%;
  left: 50%;
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  transform: translate(-50%, -50%);
  outline: none;
`;

export const Text = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.mq.s} {
    flex-direction: row;
  }
`;
