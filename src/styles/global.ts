import { createGlobalStyle } from "styled-components";
// import {Aeonik} from '../fonts/'

export default createGlobalStyle`

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}

body{
    background: #ffffff;
    font-family: 'Roboto';
    -webkit-font-smoothing:antialiased;
}

a {text-decoration: none}
a:link {text-decoration: none}
a:visited {text-decoration: none; color: inherit}
a:active {text-decoration: none}

`;
