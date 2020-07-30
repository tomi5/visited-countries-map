import React, { MouseEvent, KeyboardEvent } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonComponent = styled.button`
  font-size: 22px;
  border: none;
  box-shadow: 0 3px 6px #0000006e;
  background-color: #ffff;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${(props: { name: string }) =>
    props.name === "instruction" &&
    css`
      border-radius: 50%;
      color: #ff0e0e;
      width: 40px;
      align-self: flex-start;
    `}

  ${(props: { name: string }) =>
    props.name === "login" &&
    css`
      border-radius: 29px;
      color: #058b0e;
      text-transform: uppercase;
      padding: 0 40px;
      align-self: flex-end;
    `}

    
  ${(props: { openStatus: Boolean }) =>
    props.openStatus &&
    css`
      background-color: #c7c7c7;
      color: white;
    `}

    &:focus {
    outline: 1px solid #c7c7c7;
  }
`;

type Props = {
  name: string;
  openStatus: boolean;
  onClickStatus: (openStatus: boolean) => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  name,
  openStatus,
  onClickStatus,
  children,
}) => {
  const handleButtonClick = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    onClickStatus(!openStatus);
  };

  return (
    <Wrapper>
      <ButtonComponent
        name={name}
        openStatus={openStatus}
        onClick={handleButtonClick}
        aria-expanded={openStatus}
      >
        {children}
      </ButtonComponent>
    </Wrapper>
  );
};

export default Button;
