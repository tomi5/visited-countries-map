import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @font-face {
  font-family: 'Mali', cursive;
  src: url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap')
    }


  *, *::before, *::after {
    box-sizing: border-box;
    border: 0;
    padding: 0;
    margin: 0;
  }
   
  html {
   font-size: 62.5%;
  }

  
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin: 0;
  padding: 0;
  font-family: 'Mali', cursive;
  font-size: 1.6rem;
  overflow-x: hidden;
  transition: .3s background ease, .3s color ease;
 
}

path {
  cursor: pointer;
}
`;

export default GlobalStyle;
