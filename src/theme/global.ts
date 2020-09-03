import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   
  *, *::before, *::after {
    box-sizing: border-box;
    border: 0;
  }
   
  html {
   font-size: 62.5%;
  }

  
body {
  background: ${({ theme }: { theme: Theme }) => theme.body};
  color: ${({ theme }: { theme: Theme }) => theme.text};
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  overflow-x: hidden;
 
}

path {
  cursor: pointer;
}
`;

export default GlobalStyle;
