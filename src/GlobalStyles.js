import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";
import "@fontsource/roboto/900.css";
import '@fontsource/m-plus-rounded-1c/900.css'; 



const GlobalStyles = createGlobalStyle`
  /* Reset some default browser styles */
  body {
    color: salmon;
    margin: 0;
    padding: 0;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    /* font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif; */
    background: linear-gradient(to right, #000011, #000033, #000011);
  }
  
  /* Define global link styles */
  a {
    color: salmon;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyles;
