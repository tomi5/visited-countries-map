import React, { useContext } from "react";
import { Wrapper, Header } from "./style";
import Heading from "../Heading/Heading";
import { ThemeContext } from "../../contexts/themeContext";
import HowToUse from "../HowToUse/HowToUse";
import Button from "../Button/Button";
import { MoonOutline } from "@styled-icons/evaicons-outline/MoonOutline";
import { Sun } from "@styled-icons/boxicons-regular/Sun";

const appTitle: string = "Interactive Visited Countries Map";

const AppBar = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  let buttonText, buttonIcon

  switch (isDarkTheme) {
    case true:
      buttonText = "Light Mode";
      buttonIcon = MoonOutline;
      break;
    case false:
      buttonText = "Dark Mode";
      buttonIcon = Sun;
      break;
  }

  return (
    <Wrapper>
      <Header>
        <HowToUse title={appTitle} />
        <Heading title={appTitle} />
        <Button
          name="mode"
          icon={buttonIcon}
          padding="5px 10px"
          paddingIcon="0 5px 0 0"
          onClick={toggleTheme}
          posAbsolute={true}
        >{buttonText}</Button>
      </Header>
    </Wrapper>
  );
};

export default AppBar;

