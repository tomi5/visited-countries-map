import React from "react";
import moonIcon from "../../assets/icons/moon-icon.svg";
import sunIcon from "../../assets/icons/sun-icon.svg";
import { ButtonComponent, Icon } from "./style";

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
  return (
    <ButtonComponent name={name} onClick={onClick}>
      <Icon isDark={isDarkTheme} bg={isDarkTheme ? sunIcon : moonIcon} />
      {isDarkTheme ? `Light Mode` : `Dark Mode`}
    </ButtonComponent>
  );
};

export default ButtonModeToggle;
