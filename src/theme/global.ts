import { createGlobalStyle } from "styled-components";
import { flexMixin, transitionMixin } from "./mixins";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Mali:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap",
      "cursive",
    ],
  },
});

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    border: 0;
    padding: 0;
    margin: 0;
  }
   
  html, body {
   font-size: 62.5%;
   height: 100%;
  }


  
body {  
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin: 0;
  padding: 0;
  font-family: 'Mali', cursive;
  font-size: 1.6rem;
  overflow-x: hidden;
  ${transitionMixin({ properties: ["background", "color"] })};
 
 
}

#root {
  ${flexMixin({
    direction: "column",
  })}
  min-height: 100%;
}

path {
  cursor: pointer;
}

div[role="presentation"] {
  position: absolute !important;  
}
`;

export default GlobalStyle;
