import styled, { css } from 'styled-components';

interface Props {
  readonly name: string;
  readonly openStatus: boolean;
}

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

  ${(props: Props) =>
    props.name === 'instruction' &&
    css`
      border-radius: 50%;
      color: #ff0e0e;
      width: 40px;
      align-self: flex-start;
    `}

  ${(props: Props) =>
    props.name === 'login' &&
    css`
      border-radius: 29px;
      color: #058b0e;
      text-transform: uppercase;
      padding: 0 40px;
      align-self: flex-end;
    `}

    
  ${(props: Props) =>
    props.openStatus &&
    css`
      background-color: #c7c7c7;
      color: white;
    `}

    &:focus {
    outline: 1px solid #c7c7c7;
  }
`;
