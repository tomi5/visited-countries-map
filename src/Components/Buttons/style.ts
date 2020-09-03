import styled, { css } from 'styled-components';

type Props = {
  name: string;
  openStatus: boolean;
};

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonComponent = styled.button`
  font-size: 22px;
  border: none;
  box-shadow: 0 3px 6px #0000006e;
  background-color: #ffff;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${({ name }: Props) =>
    name === 'info' &&
    css`
      border-radius: 50%;
      color: #ff0e0e;
      width: 40px;
      align-self: flex-start;
    `}

  ${({ openStatus }: Props) =>
    openStatus &&
    css`
      background-color: #c7c7c7;
      color: white;
    `}

    &:focus {
    outline: 1px solid #c7c7c7;
  }
`;
