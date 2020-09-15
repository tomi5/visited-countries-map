import React from "react";
import { Button, IconStyleWrapper } from "./style";
import { MoonOutline } from "@styled-icons/evaicons-outline/MoonOutline";
import { Sun } from "@styled-icons/boxicons-regular/Sun";

type ButtonModeToggleProps = {
  name: string;
  isDarkTheme: boolean;
  onClick: () => void;
};

const ButtonModeToggle = ({
  name,
  onClick,
  isDarkTheme,
}: ButtonModeToggleProps) => {
  const buttonText = isDarkTheme ? `Light Mode` : `Dark Mode`;

  return (
    <Button name={name} posAbsolute onClick={onClick} padding={"5px 0px"}>
      <IconStyleWrapper>
        {isDarkTheme ? <MoonOutline /> : <Sun />}
      </IconStyleWrapper>
      {buttonText}
    </Button>
  );
};

export default ButtonModeToggle;
