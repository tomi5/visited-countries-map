import React, { MouseEvent, KeyboardEvent, ReactNode } from "react";
import { Wrapper, ButtonComponent } from "./style";

type ButtonProps = {
  name: string;
  openStatus: boolean;
  onClickStatus: (openStatus: boolean) => void;
  children: ReactNode;
};

const Button = ({ name, openStatus, onClickStatus, children }: ButtonProps) => {
  const handleButtonClick = (e: MouseEvent | KeyboardEvent): void => {
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
