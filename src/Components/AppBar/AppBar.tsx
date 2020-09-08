import React, { useContext } from "react";
import { Header } from "./style";
import Heading from "../Heading/Heading";
import { ThemeContext } from "../../contexts/themeContext";
import HowToUse from "../HowToUse/HowToUse";

const AppBar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Header>
      <HowToUse />
      <Heading title="Interactive Visited Countries Map" />
      <button onClick={toggleTheme}>Mode</button>
    </Header>
  );
};

export default AppBar;
