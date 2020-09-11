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

  const attrTitle = `Switch to ${buttonText}`;

  return (
    <Button name={name} posAbsolute onClick={onClick} padding={"5px 15px"}>
      <IconStyleWrapper padding={"0 5px 0 0"}>
        {isDarkTheme ? (
          <MoonOutline title={attrTitle} />
        ) : (
          <Sun title={attrTitle} />
        )}
      </IconStyleWrapper>
      {buttonText}
    </Button>
  );
};

export default ButtonModeToggle;
