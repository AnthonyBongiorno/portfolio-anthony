import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";
import "@fontsource/roboto/900.css";

const GlobalStyles = createGlobalStyle`
  /* Reset some default browser styles */
  body {
    color: white;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(to right, #000011, #000033, #000011);
  }
  
  /* Define global link styles */
  a {
    color: #333;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyles;
