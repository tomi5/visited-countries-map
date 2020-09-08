import React, { useContext } from "react";
import { Wrapper, Header } from "./style";
import Heading from "../Heading/Heading";
import { ThemeContext } from "../../contexts/themeContext";
import HowToUse from "../HowToUse/HowToUse";
import ButtonModeToggle from "../Buttons/ButtonModeToggle";

const AppBar = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header>
        <HowToUse />
        <Heading title="Interactive Visited Countries Map" />
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
