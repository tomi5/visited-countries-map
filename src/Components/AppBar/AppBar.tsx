import React, { useContext } from "react";
import Heading from "../Heading/Heading";

import { ThemeContext } from "../../contexts/themeContext";
import HowToUse from "../HowToUse/HowToUse";

const AppBar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <HowToUse />
      <Heading title="Interactive Visited Countries Map" />
      <button onClick={toggleTheme}>Mode</button>
    </header>
  );
};

export default AppBar;
