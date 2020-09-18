import React, { useContext } from "react";
import { Wrapper, Header } from "./style";
import Heading from "../Heading/Heading";
import { ThemeContext } from "../../contexts/themeContext";
import HowToUse from "../HowToUse/HowToUse";
import ButtonModeToggle from "../Buttons/ButtonModeToggle";

const appTitle: string = "Interactive Visited Countries Map";

const AppBar = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header>
        <HowToUse title={appTitle} />
        <Heading title={appTitle} />
        <ButtonModeToggle
          isDarkTheme={isDarkTheme}
          name={"mode"}
          onClick={toggleTheme}
        />
      </Header>
    </Wrapper>
  );
};

export default AppBar;

